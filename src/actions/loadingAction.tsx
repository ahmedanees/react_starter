import * as types from "./types";
import { loadingAction } from '../utils/types';

export function enableLoading():loadingAction {
  return {
    type: types.LOADING_ENABLE_LOADER
  };
}
export function disableLoading():loadingAction {
  return {
    type: types.LOADING_DISABLE_LOADER
  };
}
