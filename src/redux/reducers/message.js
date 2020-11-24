const initialState = {
  messageData: [],
  messageIsLoading: false,
  messageIsError: false,
  messageAlertMsg: '',

  msgDetailData: {},
  msgDetailIsLoading: false,
  msgDetailIsError: false,
  msgDetailAlertMsg: '',
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
    case 'GET_MESSAGE_DETAIL_PENDING': {
      return {
        ...state,
        msgDetailIsLoading: true,
      };
    }
    case 'GET_MESSAGE_DETAIL_REJECTED': {
      return {
        ...state,
        msgDetailIsLoading: false,
        msgDetailIsError: true,
        msgDetailAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_MESSAGE_DETAIL_FULFILLED': {
      return {
        ...state,
        msgDetailIsLoading: false,
        msgDetailIsError: false,
        msgDetailData: action.payload.data.result,
      };
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        msgDetailData: [],
      };
    }
    default: {
      return state;
    }
  }
};
