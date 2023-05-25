import actionTypes from "./actionTypes";

export const setPosts = (posts) => ({
  type: actionTypes.POSTS,
  posts,
});

export const setTags = (tags) => ({
  type: actionTypes.TAGS,
  tags,
});

export const setCurPostId = (id) => ({
  type: actionTypes.CUR_POST_ID,
  id,
});

export const setRelated = (related) => ({
  type: actionTypes.RELATED_POST,
  related,
});
