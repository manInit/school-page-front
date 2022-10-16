import { makeAutoObservable } from 'mobx';
import { getAllEvents } from '../services/events';

class EventsStore {
  events = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchEvents() {
    this.events = await getAllEvents();
  }
}

export default new EventsStore();
