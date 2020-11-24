import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getProfile: (token) => {
    return {
      type: 'GET_PROFILE',
      payload: http(token).get('/users'),
    };
  },
  destroy: () => ({
    type: 'DESTROY_PROFILE',
  }),
  editProfile: (form, token) => ({
    type: 'EDIT_PROFILE',
    payload: http(token).patch('/users', form),
  }),
  resetEdit: () => ({
    type: 'RESET_EDIT',
  }),
  updatePassword: (data, token) => ({
    type: 'UPDATE_PASSWORD',
    payload: http(token).post('/users/updatePassword', qs.stringify(data)),
  }),
};
