import React, { Component } from "react";
import { connect } from "react-redux";

import GoogleMapReact from "google-map-react";

const API_KEY = "";

const EventMarker = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "green",
      padding: "10px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

class Map extends Component {
  render() {
    const { locations, zoom, status } = this.props;
    return (
      status === "success" && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: API_KEY
          }}
          defaultCenter={locations[0]}
          defaultZoom={zoom}
        >
          {locations.map(loc => (
            <EventMarker lat={loc.lat} lng={loc.lng} text={loc.id} />
          ))}
        </GoogleMapReact>
      )
    );
  }
}

export const mapStateToProps = state => {
  return {
    locations: state.events
      .map(event => {
        const location = event.location && event.location.location;
        return (
          location &&
          location.latitude &&
          location.longitude && {
            lat: location.latitude,
            lng: location.longitude,
            id: event.id
          }
        );
      })
      .filter(loc => !!loc),
    status: state.status
  };
};

export default connect(mapStateToProps)(Map);
