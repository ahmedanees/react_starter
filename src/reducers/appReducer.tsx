import * as types from "../actions/types";
import { responseAction, appState } from '../utils/types';

const initialState:appState = {
  data: [],
  language: "en",
  activeTab:""
};

const appReducer = (state = initialState, action:responseAction) => {
  switch (action.type) {
    // case types.RESPONSE_HOME_DATA: {
    //   return {
    //     ...state,
    //     data: action.response.data,
    //   };
    // }

    default: {
      return state;
    }
  }
};

export default appReducer;
