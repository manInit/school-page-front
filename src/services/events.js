import axios from './axios-default';

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
