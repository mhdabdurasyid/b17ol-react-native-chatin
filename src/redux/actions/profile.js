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
};
