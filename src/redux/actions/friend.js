import http from '../../helpers/http';

export default {
  getFriendList: (name = '', token) => {
    return {
      type: 'GET_FRIEND',
      payload: http(token).get(`/friend?search=${name}`),
    };
  },
  destroy: () => ({
    type: 'DESTROY_FRIEND',
  }),
  resetMsg: () => ({
    type: 'RESET_MSG',
  }),
};
