// import axios from 'axios';
// import authStore from '../store/auth';

export async function getAllEvents() {
  // const token = authStore.token;

  // const response = await axios.get('/events', {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // return response;
  const events = [
    { name: 'Олимпиады школьников 2022', date: '24.09', id: 1 },
    { name: 'Инженерные каникулы ИРНИТУ', date: '21.10', id: 2 },
    { name: 'Олимпиада школьников', date: '24.09', id: 3 },
  ];
  return events;
}
