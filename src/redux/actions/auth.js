import http from '../../helpers/http';
import qs from 'querystring';

export default {
  loginByEmail: (data) => ({
    type: 'LOGIN_EMAIL',
    payload: http().post('/auth/loginByEmail', qs.stringify(data)),
  }),
  clearAlert: () => ({
    type: 'CLEAR_ALERT',
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
  forgotPassword: (data) => ({
    type: 'FORGOT_PASSWORD',
    payload: http().post('/auth/isEmailValid', qs.stringify(data)),
  }),
};
