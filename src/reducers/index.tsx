/*
 * combines all th existing reducers
 */

import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import AuthReducer from "./AuthReducer";
import appReducer from "./appReducer";
import snackbarReducer from "./snackbarReducer";
// export default Object.assign(loginReducer, loadingReducer);

// const rootReducer = combineReducers({ loginReducer, loadingReducer });
// import counterReducer from './counterReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: AuthReducer,
  snackbar: snackbarReducer,
  app: appReducer,
});

// Exports
export default rootReducer;
