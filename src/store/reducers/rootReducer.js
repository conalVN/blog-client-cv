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
  whitelist: ["posts"],
};

const rootReducer = combineReducers({
  app: appReducer,
  post: persistReducer(postConfig, postReducer),
});

export default rootReducer;
