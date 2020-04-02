import React from "react";
import Events from "./Events";
import Paging from "./Paging";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <Paging />
      <Events />
    </Container>
  );
}

export default App;
