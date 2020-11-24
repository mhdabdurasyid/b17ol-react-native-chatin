import http from '../../helpers/http';

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
};
