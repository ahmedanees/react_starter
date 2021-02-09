/*
 * Reducer actions related with login
 */
import * as types from "./types";

export function loginRequest(data) {
  console.log("Login from Auth Action", data);
   return {
      type: types.LOGIN_REQUEST,
      data,
   };
}
export function loginResponse(response) {
   return {
      type: types.LOGIN_RESPONSE,
      response,
   };
}
export function registerRequest(data) {
   return {
      type: types.REGISTER_REQUEST,
      data,
   };
}

export function verifyEmailRequest(data) {
   return {
      type: types.VERIFY_EMAIL_REQUEST,
      data,
   };
}
export function loginFailed() {
   return {
      type: types.LOGIN_FAILED,
   };
}

export function fbLoginRequest(data) {
   return {
      type: types.FB_LOGIN_REQUEST,
      data,
   };
}

export function fbLoginResponse(response) {
   return {
      type: types.FB_LOGIN_RESPONSE,
      response,
   };
}

export function gmailLoginRequest(data) {
   return {
      type: types.GMAIL_LOGIN_REQUEST,
      data,
   };
}

export function gmailLoginResponse(response) {
   return {
      type: types.GMAIL_LOGIN_RESPONSE,
      response,
   };
}

export function logOut() {
   console.log("calling logout")
   return {
      type: types.LOGOUT,
   };
}
export function onLoginResponse(response) {
   return {
      type: types.LOGIN_RESPONSE,
      response,
   };
}
export function profileImageRequest(data) {
   return {
      type: types.PROFILE_IMAGE_REQUEST,
      data,
   };
}
export function profileImageResponse(response) {
   return {
      type: types.PROFILE_IMAGE_RESPONSE,
      response,
   };
}
export function forgotPasswordRequest(data) {
   return {
      type: types.FORGOT_PASSWORD_REQUEST,
      data,
   };
}
export function forgotPasswordResponse(response) {
   return {
      type: types.FORGOT_PASSWORD_RESPONSE,
      response,
   };
}

export function onSkip(response) {
   return {
      type: types.SKIP,
      response,
   };
}
