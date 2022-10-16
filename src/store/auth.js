import { makeAutoObservable } from 'mobx';
import { loginRequest, registerRequest } from '../services/auth';

class AuthStore {
  isAuth = false;
  isAdmin = false;
  token = '';

  constructor() {
    makeAutoObservable(this);
  }

  async login({ username, password }) {
    console.log(username, password);
    this.isAuth = true;
    return;

    // try {
    //   const loginData = await loginRequest({ username, password });
    //   this.isAuth = true;
    //   this.token = loginData.token;
    // } catch (e) {
    //   console.log('login error');
    //   this.isAuth = false;
    //   this.token = '';
    // }
    // return this.token;
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
    try {
      const registerData = registerRequest({
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
      this.token = registerData.token;
    } catch (e) {
      console.log('login error');
      this.isAuth = false;
      this.token = '';
    }

    return this.token;
  }
}

export default new AuthStore();
