import { makeAutoObservable } from 'mobx';
import { getAllEvents, createEvent, updateInfoEvent, deleteEvent } from '../services/events';

class EventsStore {
  events = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchEvents() {
    this.events = await getAllEvents();
    return this.events;
  }
  async createEvent(event) {
    const result = await createEvent(event);
    if (result) {
      this.events.push(event);
    }
  }
  async changeEvent(event) {
    const result = await updateInfoEvent(event);
    if (result) {
      this.events = this.events.map((event) => {
        if (result.id == event.id)
          return result;
        else
          return event;
      });
    }
  }
  async deleteEvent(event) {
    const result = await deleteEvent(event);
    if (result) {
      this.events = this.events.filter(eventsChunk => eventsChunk.id !== event.id);
    }
  }
}

export default new EventsStore();
