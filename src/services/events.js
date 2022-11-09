import axios from './axios-default';

/**
 * Return array of all events. If it admin then send users in events too
 * @returns Array of events. With users or not
 */
export async function getAllEvents() {
  const { data } = await axios.get('/api/activities');
  return data.map((event) => ({
    ...event,
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
  const { data } = await axios.put('/api/activities', event);
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

/**
 * Get all users registered on event by id event
 * @param {number} eventId Event id where users get
 * @returns Array of users registered on event
 */
export async function getRegisteredUsersOnEvent(eventId) {
  const { data } = await axios.get(
    `/api/schoolchildren/registered?activityId=${eventId}`
  );
  return data;
}
