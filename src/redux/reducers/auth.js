const initialState = {
  isLogin: false,
  isError: false,
  token: '',
  alertMsg: '',

  isEmailError: false,
  emailValidData: {},

  isResetError: false,
  isReset: false,

  isPhoneError: false,
  isPhoneValid: false,

  isRegisterError: false,
  isRegister: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT': {
      return initialState;
    }
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
        isEmailError: false,
        emailValidData: {},
        isResetError: false,
        isReset: false,
        isPhoneError: false,
        isPhoneValid: false,
        isRegisterError: false,
        isRegister: false,
      };
    }
    case 'FORGOT_PASSWORD_PENDING': {
      return {
        ...state,
        isLoading: true,
        alertMsg: 'Checking your email. Please wait..',
      };
    }
    case 'FORGOT_PASSWORD_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isEmailError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'FORGOT_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isEmailError: false,
        emailValidData: action.payload.data.result,
        alertMsg: action.payload.data.message,
      };
    }
    case 'RESET_PASSWORD_PENDING': {
      return {
        ...state,
        isLoading: true,
        alertMsg: 'Resetting your password. Please wait..',
      };
    }
    case 'RESET_PASSWORD_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isResetError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'RESET_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isResetError: false,
        isReset: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'PHONE_VALIDATION_PENDING': {
      return {
        ...state,
        isLoading: true,
        alertMsg: 'Checking your phone number. Please wait..',
      };
    }
    case 'PHONE_VALIDATION_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isPhoneError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'PHONE_VALIDATION_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isPhoneError: false,
        isPhoneValid: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'LOGIN_PHONE_PENDING': {
      return {
        ...state,
        isLoading: true,
        alertMsg: 'Loggin in. Please wait..',
      };
    }
    case 'LOGIN_PHONE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'LOGIN_PHONE_FULFILLED': {
      return {
        ...state,
        token: action.payload.data.token,
        isLoading: false,
        isError: false,
        isLogin: true,
        alertMsg: 'Successfully login',
      };
    }
    case 'REGISTER_PENDING': {
      return {
        ...state,
        isLoading: true,
        alertMsg: 'Loggin in. Please wait..',
      };
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isRegisterError: true,
        alertMsg: action.payload.response.data.message,
      };
    }
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isRegisterError: false,
        isRegister: true,
        alertMsg: 'Successfully register',
      };
    }
    default: {
      return state;
    }
  }
};
