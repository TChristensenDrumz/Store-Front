import React, { useState, useEffect } from "react";
import Jumbo from "./components/Jumbotron";
import SiteLanding from "./pages/siteLanding/SiteLanding";
import api from "./utils/api";

function App() {
  return (
    <div> 
      <Jumbo />
    </div>
  );
}

export default App;
