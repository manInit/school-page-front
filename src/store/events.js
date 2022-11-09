import { makeAutoObservable } from 'mobx';
import {
  getAllEvents,
  createEvent,
  updateInfoEvent,
  getRegisteredUsersOnEvent,
  appointmentSchoolchildOnEvent,
} from '../services/events';
import authStore from './auth';

class EventsStore {
  events = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchEvents() {
    const events = await getAllEvents();
    if (authStore.isAdmin) {
      for (let i = 0; i < events.length; i++) {
        const users = await getRegisteredUsersOnEvent(events[i].id);
        events[i] = {
          ...events[i],
          users,
        };
      }
    }
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

  async changeEvent(event) {
    const result = await updateInfoEvent(event);
    if (result) {
      this.events = this.events.map((event) => {
        if (result.id === event.id) return result;
        return event;
      });
    }
  }
}

export default new EventsStore();
