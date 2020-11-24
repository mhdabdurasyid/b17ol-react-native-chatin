const initialState = {
  messageData: [],
  messageIsLoading: false,
  messageIsError: false,
  messageAlertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGE_LIST_PENDING': {
      return {
        ...state,
        messageIsLoading: true,
      };
    }
    case 'GET_MESSAGE_LIST_REJECTED': {
      return {
        ...state,
        messageIsLoading: false,
        messageIsError: true,
        messageAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_MESSAGE_LIST_FULFILLED': {
      return {
        ...state,
        messageIsLoading: false,
        messageIsError: false,
        messageData: action.payload.data.result,
      };
    }
    case 'DESTROY_MESSAGE': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
