import React from "react";
import Map from "./Map";

const Event = props => {
  const { event } = props;
  if (!event.location || !event.location.location) {
    return (
      <p>
        <div>{event && event.title}</div>
        <div>{"virtual"}</div>
      </p>
    );
  } else {
    return (
      <div style={{ width: "100%", height: "400px" }}>
        <div>{event && event.title}</div>
        <Map
          lat={event.location.location.latitude}
          lng={event.location.location.longitude}
        />
      </div>
    );
  }
};

export default Event;
