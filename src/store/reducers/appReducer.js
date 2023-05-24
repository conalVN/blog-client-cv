import actionTypes from "../actions/actionTypes";

const initState = {
  isLoading: false,
  isLogin: false,
  isPopup: false,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        ...state,
        isLoading: action.flag,
      };
    case actionTypes.POPUP:
      return {
        ...state,
        isPopup: action.flag,
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogin: action.flag,
      };
    default:
      return state;
  }
};

export default appReducer;
