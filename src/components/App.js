import React from "react";
import Events from "./Events";
import Paging from "./Paging";
import Map from "./Map";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <div
        style={{
          width: "100%",
          height: "200px",
          paddingBottom: "16px",
          paddingTop: "16px"
        }}
      >
        <Map zoom={11} />
      </div>
      <Paging />
      <Events />
    </Container>
  );
}

export default App;
