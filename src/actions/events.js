import { SET_EVENTS, SET_EVENTS_STATUS } from "../constants/events";
import { FETCHING, SUCCESS, FAILURE } from "../constants/status";
import axios from "axios";

function setEvents(events, status) {
  return { type: SET_EVENTS, events, status };
}

function setEventsLoading() {
  return { type: SET_EVENTS_STATUS, status: FETCHING };
}

function setEventsFail() {
  return { type: SET_EVENTS_STATUS, status: FAILURE };
}

export function getEvents() {
  return function(dispatch) {
    dispatch(setEventsLoading());
    return axios
      .get(`https://api.mobilize.us/v1/organizations/1/events?page=1`)
      .then(response => {
        dispatch(setEvents(response.data, SUCCESS));
      })
      .catch(error => {
        dispatch(setEventsFail());
      });
  };
}
