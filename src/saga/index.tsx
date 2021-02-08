import { all, takeEvery } from "redux-saga/effects";
import * as types from "../actions/types";
import loginSaga from "./LoginSaga";
import registerSaga from "./RegisterSaga";

export default function* watch() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, loginSaga),
    takeEvery(types.REGISTER_REQUEST, registerSaga)
  ]);
}
