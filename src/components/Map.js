import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const API_KEY = "";

const EventMarker = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "green",
      padding: "15px 10px",
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
  static defaultProps = {
    lat: 0,
    lng: 0,
    zoom: 11
  };

  render() {
    const { lat, lng, zoom } = this.props;
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY
        }}
        defaultCenter={{ lat, lng }}
        defaultZoom={zoom}
      >
        <EventMarker lat={lat} lng={lng} text="X" />
      </GoogleMapReact>
    );
  }
}

export default Map;
