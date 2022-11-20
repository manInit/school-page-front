import { makeAutoObservable } from 'mobx';
import {
  getAllEvents,
  createEvent,
  updateInfoEvent,
  getRegisteredUsersOnEvent,
  appointmentSchoolchildOnEvent,
  registerOnActivity,
  deleteEvent,
} from '../services/events';
import authStore from './auth';

class EventsStore {
  events = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchRegisteredStudent(eventId) {
    if (authStore.isAdmin) {
      const users = await getRegisteredUsersOnEvent(eventId);
      this.events.find((event) => event.id === eventId).users = users;
      return users;
    }
  }

  async fetchEvents() {
    const events = await getAllEvents();
    this.events = events;
    return this.events;
  }

  async createEvent(event) {
    const result = await createEvent(event);
    if (result) {
      this.events.push(event);
    }
  }

  async checkUsers(userId, eventId) {
    const result = await appointmentSchoolchildOnEvent(userId, eventId);
    return result;
  }

  async removeEvent(eventId) {
    await deleteEvent(eventId);
    this.events = this.events.filter((event) => event.id !== eventId);
  }

  async changeEvent(event) {
    const result = await updateInfoEvent(event);
    if (result) {
      this.events = this.events.map((event) => {
        if (result.id === event.id) return result;
        return event;
      });
    }
  }

  async registerStudent(schoolId, activityId) {
    const result = await registerOnActivity(schoolId, activityId);
    console.log(result);
  }
}

export default new EventsStore();
