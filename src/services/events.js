import axios from 'axios';
// TODO: webpack proxy
const host = 'http://92.63.101.204:8080/';

export async function getAllEvents() {
  const { data } = await axios.get(host + 'api/activities');
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
