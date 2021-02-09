import { put, call } from "redux-saga/effects";
import loginUser from "../api/methods/Login";
import * as authActions from "../actions/authActions";
import * as loadingAction from "../actions/loadingAction";
import * as navigationActions from "../actions/navigationActions";
import AsyncStorage from "@react-native-community/async-storage";
import * as snackbarActions from "../actions/snackbarActions";
import { requestAction } from '../utils/types';

// Our worker Saga that logins the user
export default function* loginAsync(action:requestAction) {
  yield put(loadingAction.enableLoading());

  //how to call api
  let response = yield call(loginUser, action.data);
  console.log("saga data", action)
  response = response;
  
  let email = response.user_data.email;
  console.log("response login saga", response.user_data.email);

  if (response && response.status == true) {
    AsyncStorage.setItem("@token", response.token);
    yield put(loadingAction.disableLoading());

    console.log("Login saga file no 26", action.data.email)
    yield put(
      authActions.onLoginResponse({
        email: action.data.email,
        token: response.token
      })
    );
    yield call(navigationActions.navigateToHome,"");
    let data =response.message
    yield put(snackbarActions.enableSnackbar(data));
  } else if (response && response.status == false) {
    yield put(loadingAction.disableLoading());
    let data =response.message
    yield put(snackbarActions.enableSnackbar(data));
  } else {
    yield put(loadingAction.disableLoading());
    let data = "something went wrong";
    yield put(snackbarActions.enableSnackbar(data));
  }
  // else {
  // yield put(loginActions.loginFailed());
  // yield put(loginActions.disableLoader({}));
  // alert('err');
  // }
}
