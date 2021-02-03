import React, { useState, useEffect } from "react";
import About from "./components/About";
import Jumbo from "./components/Jumbotron";
import SiteLanding from "./pages/siteLanding/SiteLanding";
import api from "./utils/api";

function App() {
  return (
    <div> 
      <About />
    </div>
  );
}

export default App;
