import * as types from "../actions/types";
import { responseAction,loadingState } from '../utils/types';



const initialState:loadingState = {
  isLoadingVisible: false,
};

// Redux: Counter Reducer
const loadingReducer = (state = initialState, action:responseAction) => {
  switch (action.type) {
    case types.LOADING_ENABLE_LOADER: {
      return {
        ...state,
        isLoadingVisible: true
      };
    }
    case types.LOADING_DISABLE_LOADER: {
      return {
        ...state,
        isLoadingVisible: false
      };
    }

    default: {
      return state;
    }
  }
};

// Exports
export default loadingReducer;
