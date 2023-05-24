import actionTypes from "../actions/actionTypes";

const initState = {
  posts: null,
  tags: null,
  curPostId: null,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.POSTS:
      return {
        ...state,
        posts: action.posts || null,
      };
    case actionTypes.TAGS:
      return {
        ...state,
        tags: action.tags || null,
      };
    case actionTypes.CUR_POST_ID:
      return {
        ...state,
        curPostId: action.id || null,
      };
    default:
      return state;
  }
};

export default postReducer;
