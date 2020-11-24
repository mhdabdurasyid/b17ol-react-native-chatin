const initialState = {
  friendData: [],
  friendIsLoading: false,
  friendIsError: false,
  friendAlertMsg: '',

  searchIsLoading: false,
  searchIsError: false,
  searchAlert: '',
  searchData: [],
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
        searchIsError: false,
        searchAlert: '',
      };
    }
    case 'SEARCH_USER_PENDING': {
      return {
        ...state,
        searchIsLoading: true,
        searchAlert: 'Search user in progress. Please wait..',
      };
    }
    case 'SEARCH_USER_REJECTED': {
      return {
        ...state,
        searchIsLoading: false,
        searchIsError: true,
        searchAlert: action.payload.response.data.message,
      };
    }
    case 'SEARCH_USER_FULFILLED': {
      return {
        ...state,
        searchIsLoading: false,
        searchIsError: false,
        searchData: action.payload.data.result,
      };
    }
    default: {
      return state;
    }
  }
};
