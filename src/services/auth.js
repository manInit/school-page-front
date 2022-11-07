import axios from 'axios';

export async function loginRequest(data) {
  const response = await axios.post('http://127.0.0.1:8080/api/login', data);
  return response;
}

export async function registerRequest(data) {
  const response = await axios.post('http://127.0.0.1:8080/api/register', data);
  return response;
}
