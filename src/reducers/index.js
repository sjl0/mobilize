import { SET_EVENTS, SET_EVENTS_STATUS } from "../constants/events";
import { INIT } from "../constants/status";

export const initialState = {
  events: [],
  status: INIT
};

function rootReducer(state = initialState, action) {
  console.log(action);
  if (action.type === SET_EVENTS_STATUS) {
    return { ...state, status: action.status };
  } else if (action.type === SET_EVENTS) {
    return {
      ...state,
      status: action.status,
      events: action.events && action.events.data
    };
  }
  return state;
}

export default rootReducer;
