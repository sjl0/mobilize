import React from "react";
import Events from "./Events";
import Paging from "./Paging";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Paging />
      <Events />
    </React.Fragment>
  );
}

export default App;
