import axios from './axios-default';

/**
 * Return array of all events. If it admin then send users in events too
 * @returns Array of events. With users or not
 */
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
/**
 * Create new activity
 * @param {string} event.name Name of event
 * @param {string} event.description Description of event
 * @param {string} event.startDate Start date of event
 * @param {string} event.endDate End date of event
 * @param {string} event.participationPoint Point for participation
 * @param {string} event.maxParticipants Max count people to participate
 * @param {string} event.activityType ????????????
 * @return {event} Return object created event
 */
export async function createEvent(event) {
  const { data } = await axios.post('/api/activities/create', event);
  return data;
}

/**
 * update activity
 * @param {number} event.id Id of update event
 * @param {string} event.name Name of event
 * @param {string} event.description Description of event
 * @param {string} event.startDate Start date of event
 * @param {string} event.endDate End date of event
 * @param {string} event.participationPoint Point for participation
 * @param {string} event.maxParticipants Max count people to participate
 * @param {string} event.activityType ????????????
 * @return {event} Return object updated event
 */
export async function updateInfoEvent(event) {
  event.id = 1
  const { data } = await axios.put('/api/activities/create', event);
  return data;
}

/**
 * Mark the presence schooler on activity
 * @param {number} shcoolchildId Id of schoolchild
 * @param {number} activityId Id of event
 * @return {Object} Empty object
 */
export async function appointmentSchoolchildOnEvent(shcoolchildId, activityId) {
  const { data } = await axios.post('/api/activities/appointment', {
    shcoolchildId,
    activityId,
  });
  return data;
}
