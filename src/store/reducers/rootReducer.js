import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import appReducer from "./appReducer";
import postReducer from "./postReducer";

const commonConfig = {
  storage: storage,
  stateReconsiler: autoMergeLevel2,
};
const postConfig = {
  ...commonConfig,
  key: "posts",
  whitelist: ["posts", "curPostId"],
};

const appConfig = {
  ...commonConfig,
  key: "app",
  whitelist: ["isLogin"],
};

const rootReducer = combineReducers({
  app: persistReducer(appConfig, appReducer),
  post: persistReducer(postConfig, postReducer),
});

export default rootReducer;
