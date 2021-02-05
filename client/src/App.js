// Import dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'

// Import components
import ProtectedRoute from "./components/ProtectedRoute";


// Import pages
import Cart from "./pages/cart/Cart";

import StoreLanding from "./pages/storeLanding/StoreLanding";
import SiteLanding from "./pages/siteLanding/SiteLanding";
import AllProducts from "./pages/allProducts/allProducts"
import ContactStore from "./pages/contactStore/ContactStore";
import StoreLogin from "./pages/storeLogin/storeLogin";
import CreateStoreAccount from "./pages/storeCreate/StoreCreate";
import CustomerLogin from "./pages/customerLogin/CustomerLogin";
import CreateAccount from "./pages/customerCreate/CustomerCreate";
import EditStore from "./pages/editStore/EditStore";


function App() {
  return (
    <Cart/>
  );
}

export default App;
