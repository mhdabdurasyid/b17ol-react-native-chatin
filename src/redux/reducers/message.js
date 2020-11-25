const initialState = {
  messageData: [],
  messagePageInfo: {},
  messageIsLoading: false,
  messageIsError: false,
  messageAlertMsg: '',

  msgDetailData: {},
  msgDetailPageInfo: {},
  msgDetailIsLoading: false,
  msgDetailIsError: false,
  msgDetailAlertMsg: '',

  sendIsLoading: false,
  sendIsError: false,
  sendAlert: '',
  isSend: false,
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
        messagePageInfo: action.payload.data.pageInfo,
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
        msgDetailPageInfo: action.payload.data.pageInfo,
      };
    }
    case 'CLEAR_MESSAGE': {
      return {
        ...state,
        msgDetailData: [],
        msgDetailPageInfo: {},
      };
    }
    case 'SEND_MESSAGE_PENDING': {
      return {
        ...state,
        sendIsLoading: true,
        sendAlert: 'Sending message. Please wait..',
      };
    }
    case 'SEND_MESSAGE_REJECTED': {
      return {
        ...state,
        sendIsLoading: false,
        sendIsError: true,
        sendAlert: action.payload.response.data.message,
      };
    }
    case 'SEND_MESSAGE_FULFILLED': {
      return {
        ...state,
        sendIsLoading: false,
        sendIsError: false,
        isSend: true,
        sendAlert: 'Successfully send message',
      };
    }
    case 'RESET_SEND': {
      return {
        ...state,
        isSend: false,
      };
    }
    default: {
      return state;
    }
  }
};
