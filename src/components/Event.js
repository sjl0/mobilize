import React, { Component } from "react";
import Map from "./Map";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class Event extends Component {
  render() {
    const { event } = this.props;
    let time;
    if (event && event.timeslots && event.timeslots.length > 0) {
      time = new Date(event.timeslots[0].start_date * 1000).toString();
      if (event.timeslots.length > 1) {
        const num = event.timeslots.length - 1;
        const additionalInfo = ` and ${num} other times`;
        time += additionalInfo;
      }
    }
    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{event.id + ": " + event.title}</Card.Title>
          {event.sponser && event.sponser.name && (
            <Card.Subtitle className="mb-2 text-muted">
              {event.sponser.name}
            </Card.Subtitle>
          )}
          {time && <Card.Text>{time}</Card.Text>}
          {event.location && event.location.venue ? (
            <Card.Text>{event.location.venue}</Card.Text>
          ) : (
            <Card.Text>Virtual Event</Card.Text>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default Event;
