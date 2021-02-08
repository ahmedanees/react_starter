// export action creators
import * as AuthActions from "./authActions";
import * as navigationActions from "./navigationActions";
import * as loadingAction from "./loadingAction";
import * as snackbarActions from "./snackbarActions";
import * as appAction from './appAction';
export const ActionCreators = Object.assign(
  {},
  AuthActions,
  loadingAction,
  navigationActions,
  snackbarActions,
  appAction
);
