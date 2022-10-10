export async function post(url, data) {
  const { payloadData } = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await payloadData.json();
}

export async function loginRequest(data) {
  const response = await post('http://92.63.101.204:8080/login', data);
  return response;
}

export async function registerRequest(data) {
  const response = await post('http://92.63.101.204:8080/registration', data);
  return response;
}
