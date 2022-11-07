import { makeAutoObservable } from 'mobx';
import { getAllEvents, createEvent, updateInfoEvent} from '../services/events';

class EventsStore {
  events = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchEvents() {
    this.events = await getAllEvents();
    return this.events;
  }
  async createEvent(event){
    const result = await createEvent(event);
    if(result){
      this.events.push(event);
    }
  }
  async changeEvent(event){
    const result = await updateInfoEvent(event);
    if(result){
      this.events = this.events.map((event)=>{
        if (result.id==event.id)
          return result;
        else 
          return event;
      });  
    }
  }
}

export default new EventsStore();
