const initialState = {
  friendData: [],
  friendIsLoading: false,
  friendIsError: false,
  friendAlertMsg: '',

  searchIsLoading: false,
  searchIsError: false,
  searchAlert: '',
  searchData: [],

  addIsLoading: false,
  addIsError: false,
  addAlert: '',
  isAdd: false,
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
        addIsError: false,
        isAdd: false,
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
    case 'ADD_FRIEND_PENDING': {
      return {
        ...state,
        addIsLoading: true,
        addAlert: 'Add Friend in progress. Please wait..',
      };
    }
    case 'ADD_FRIEND_REJECTED': {
      return {
        ...state,
        addIsLoading: false,
        addIsError: true,
        addAlert: action.payload.response.data.message,
      };
    }
    case 'ADD_FRIEND_FULFILLED': {
      return {
        ...state,
        addIsLoading: false,
        addIsError: false,
        isAdd: true,
        addAlert: 'Successfully add new friend',
      };
    }
    default: {
      return state;
    }
  }
};
