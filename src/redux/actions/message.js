import http from '../../helpers/http';

export default {
  getMessageList: (token) => {
    return {
      type: 'GET_MESSAGE_LIST',
      payload: http(token).get('/message'),
    };
  },
  destroy: () => ({
    type: 'DESTROY_MESSAGE',
  }),
};
