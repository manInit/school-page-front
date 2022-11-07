import { makeAutoObservable } from 'mobx';
import { registerRequest, loginRequest } from '../services/auth';

class AuthStore {
  isAuth = false;
  isAdmin = true;
  token = '';

  constructor() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuth = true;
      this.token = token;
    }
    makeAutoObservable(this);
  }

  get authToken() {
    return this.token;
  }

  logout() {
    this.isAdmin = false;
    this.token = '';
    this.isAuth = false;
    localStorage.removeItem('token');
  }

  loginAsAdmin() {
    this.isAdmin = true;
    this.isAuth = true;
  }

  async login({ username, password }) {
    const { data: loginData } = await loginRequest({
      email: username,
      password,
    });
    if (!loginData.token) {
      // TODO: handle wrong auth
      // throw Error('invalid login');
    }
    this.isAuth = true;
    this.token = loginData.token;
    localStorage.setItem('token', this.token);

    return this.token;
  }

  async register({
    password,
    name,
    secondName,
    lastName,
    city,
    schoolClass,
    phoneNumber,
    email,
  }) {
    const registerData = await registerRequest({
      password,
      name,
      secondName,
      lastName,
      city,
      schoolClass,
      phoneNumber,
      email,
    });
    this.isAuth = true;
    if (!registerData.token) {
      // TODO: token or auth??
    }
    return this.token;
  }
}

export default new AuthStore();
