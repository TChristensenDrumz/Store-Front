// Import dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import styling
import './pages/ContactStore/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'

// Import components
import ProtectedRoute from "./components/ProtectedRoute";


// Import pages
import Cart from "./pages/Cart/Cart";

import StoreLanding from "./pages/StoreLanding/StoreLanding";
import SiteLanding from "./pages/SiteLanding/SiteLanding";
import AllProducts from "./pages/AllProducts/AllProducts";
import ContactStore from "./pages/ContactStore/ContactStore";
import StoreLogin from "./pages/StoreLogin/StoreLogin";
import CreateStoreAccount from "./pages/StoreCreate/StoreCreate";
import CustomerLogin from "./pages/CustomerLogin/CustomerLogin";
import CreateAccount from "./pages/CustomerCreate/CustomerCreate";
import EditStore from "./pages/EditStore/EditStore";


function App() {
  return (
    <Router>

      <Route exact path="/" component={SiteLanding} />

      {/* Logins */}
      <Route exact path="/login" component={StoreLogin} />
      <Route exact path="/customer-login" component={CustomerLogin} />
      <Route exact path="/signup" component={CreateStoreAccount} />
      <Route exact path="/new-customer" component={CreateAccount} />

      {/*  */}
      <Route exact path="/storeEditor">
        <ProtectedRoute component={EditStore} />
      </Route>
      <Route exact path="/storefront/:storeId" component={StoreLanding} />


  </Router>
  );
}

export default App;
