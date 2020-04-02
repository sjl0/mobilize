import React from "react";
import Map from "./Map";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Event = props => {
  const { event } = props;
  console.log(event, event.featured_image_url);
  let time;
  if (event && event.timeslots) {
    time = new Date(event.timeslots[0].start_date * 1000).toString();
    if (event.timeslots.length > 1) {
      const num = event.timeslots.length - 1;
      const additionalInfo = ` and ${num} other times`;
      time += additionalInfo;
    }
  }
  let showMap = false;
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        {event.sponser && event.sponser.name && (
          <Card.Subtitle className="mb-2 text-muted">
            {event.sponser.name}
          </Card.Subtitle>
        )}
        {time && <Card.Text>{time}</Card.Text>}
        {event.location && event.location.location ? (
          <Button variant="primary">Show map</Button>
        ) : (
          <Card.Text>Virtual Event</Card.Text>
        )}
        {showMap && (
          <div style={{ width: "100%", height: "400px" }}>
            <Map
              lat={event.location.location.latitude}
              lng={event.location.location.longitude}
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Event;
