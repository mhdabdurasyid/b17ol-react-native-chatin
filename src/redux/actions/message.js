import http from '../../helpers/http';
import qs from 'querystring';

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
  getMessageDetail: (friendId, token) => {
    return {
      type: 'GET_MESSAGE_DETAIL',
      payload: http(token).get(`/message/${friendId}`),
    };
  },
  clearDetail: () => ({
    type: 'CLEAR_MESSAGE',
  }),
  sendMessage: (data, token) => ({
    type: 'SEND_MESSAGE',
    payload: http(token).post('/message', qs.stringify(data)),
  }),
  resetSend: () => ({
    type: 'RESET_SEND',
  }),
};
