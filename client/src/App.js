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
import SiteLanding from "./pages/siteLanding/SiteLanding";
import EditStore from "./pages/editStore/EditStore";
import StoreLanding from "./pages/storeLanding/StoreLanding";


function App() {
  return (
    <Router>

        {/* Landing */}
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
