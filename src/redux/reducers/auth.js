const initialState = {
  isLogin: false,
  isError: false,
  token: '',
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_EMAIL_PENDING': {
      return {
        ...state,
        isLoading: true,
        alertMsg: 'Loggin in. Please wait..',
      };
    }
    case 'LOGIN_EMAIL_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'LOGIN_EMAIL_FULFILLED': {
      return {
        ...state,
        token: action.payload.data.token,
        isLoading: false,
        isError: false,
        isLogin: true,
        alertMsg: 'Successfully login',
      };
    }
    case 'CLEAR_ALERT': {
      return {
        ...state,
        isError: false,
        alertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};
