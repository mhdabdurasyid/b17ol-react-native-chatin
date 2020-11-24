const initialState = {
  friendData: [],
  friendIsLoading: false,
  friendIsError: false,
  friendAlertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FRIEND_PENDING': {
      return {
        ...state,
        friendIsLoading: true,
      };
    }
    case 'GET_FRIEND_REJECTED': {
      return {
        ...state,
        friendIsLoading: false,
        friendIsError: true,
        friendAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_FRIEND_FULFILLED': {
      return {
        ...state,
        friendIsLoading: false,
        friendIsError: false,
        friendData: action.payload.data.result,
      };
    }
    case 'DESTROY_FRIEND': {
      return initialState;
    }
    case 'RESET_MSG': {
      return {
        ...state,
        friendIsError: false,
        friendAlertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};
