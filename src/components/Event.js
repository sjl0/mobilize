import React from "react";

const Event = props => {
  const { event } = props;
  return <p>{event && event.title}</p>;
};

export default Event;
