import { makeAutoObservable } from 'mobx';
import { getAllEvents } from '../services/events';

class EventsStore {
  events = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchEvents() {
    this.events = await getAllEvents();
    return this.events;
  }
}

export default new EventsStore();
