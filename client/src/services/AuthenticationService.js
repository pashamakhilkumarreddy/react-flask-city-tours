import config from '../config';
import Api from './Api';

const { REGISTER, LOGIN, LOGOUT } = config;

export default {
  register({ email, password }) {
    return Api().post(REGISTER, {
      email,
      password,
    });
  },
  login({ email, password }) {
    return Api().post(LOGIN, {
      email,
      password,
    });
  },
  logout() {
    return Api().post(LOGOUT);
  },
};
