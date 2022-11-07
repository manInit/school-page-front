import axios from 'axios';

export async function getAllEvents() {
  const { data } = await axios.get('/api/activities');
  return data.map((event, index) => ({
    ...event,
    users: [
      {
        name: 'Имя' + index,
        surname: 'Фамилия',
        patronym: 'Отчество',
      },
      {
        name: 'Имя2' + index,
        surname: 'Фамилия',
        patronym: 'Отчество',
      },
      {
        name: 'Имя2' + index,
        surname: 'Фамилия',
        patronym: 'Отчество',
      },
    ],
  }));
}
export async function createEvent(event){
  event.trajectories = [{id:1}];
  const {data} = await axios.post('http://127.0.0.1:8080/api/activities/create',event);
  return data;
}
export async function changeEvent(event){
  const {data} = await axios.put('http://127.0.0.1:8080/api/activities',event).catch((err)=>{});
  return data;
}
export async function deleteEvent(event){

}