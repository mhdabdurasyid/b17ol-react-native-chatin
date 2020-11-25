import http from '../../helpers/http';
import qs from 'querystring';

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
  searchUser: (data, token) => {
    return {
      type: 'SEARCH_USER',
      payload: http(token).post('/users/search', qs.stringify(data)),
    };
  },
  addFriend: (data, token) => {
    return {
      type: 'ADD_FRIEND',
      payload: http(token).post('/friend', qs.stringify(data)),
    };
  },
  deleteFriend: (id, token) => {
    return {
      type: 'DELETE_FRIEND',
      payload: http(token).delete(`/friend/${id}`),
    };
  },
};
