import axios from 'axios';

export async function loginRequest(data) {
  const response = await axios.post('/login', data);
  return response;
}

export async function registerRequest(data) {
  const response = await axios.post('/registration', data);
  return response;
}
