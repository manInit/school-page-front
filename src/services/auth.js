import axios from 'axios';
// TODO: webpack proxy
const host = 'http://92.63.101.204:8080/';

export async function loginRequest(data) {
  const response = await axios.post(host + 'login', data);
  return response;
}

export async function registerRequest(data) {
  const response = await axios.post(host + 'registration', data);
  return response;
}
