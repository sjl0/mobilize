import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../actions/events";
import Event from "./Event";
import { FETCHING, FAILURE, INIT } from "../constants/status";

export class Events extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events, status } = this.props;
    if (status === FETCHING || status === INIT) {
      return <p>{"Loading"}</p>;
    }
    if (status === FAILURE) {
      return <p>{"API Failed to find events"}</p>;
    }

    return (
      <div>
        <ul>
          {events.map(el => (
            <li>
              <Event event={el} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return { events: state.events, status: state.status };
};

export const mapDispatchToProps = dispatch => {
  return { fetchEvents: () => dispatch(getEvents()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
