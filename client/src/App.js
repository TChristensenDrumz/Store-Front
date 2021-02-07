// Import dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import styling
import "react-bootstrap";

// Import components
import ProtectedRoute from "./components/ProtectedRoute";

// Import pages
import Cart from "./pages/Cart/Cart";

import StoreLanding from "./pages/StoreLanding/StoreLanding";
import SiteLanding from "./pages/SiteLanding/SiteLanding";
import AllProducts from "./pages/AllProducts/allProducts";
import Product from "./pages/Product/product";
import ContactStore from "./pages/ContactStore/ContactStore";
import StoreLogin from "./pages/StoreLogin/storeLogin";
import CreateStoreAccount from "./pages/StoreCreate/StoreCreate";
import CustomerLogin from "./pages/CustomerLogin/CustomerLogin";
import CreateAccount from "./pages/CustomerCreate/CustomerCreate";
import EditStore from "./pages/EditStore/EditStore";
import MarketPlace from "./pages/MarketPlace/MarketPlace";

function App() {
  return (
    <Router>
      <Switch>
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
        <Route exact path="/marketplace" component={MarketPlace} />
        <Route exact path="/storefront/allproducts/:storeId" component={AllProducts} />
        <Route exact path="/storefront/contact/:storeId" component={ContactStore} />
        <Route exact path="/storefront/:storeId/:productId" component={Product} />
        <Route exact path="/cart" component={Cart} />
        {/* Default Route */}
        <Route component={SiteLanding} />
      </Switch>
    </Router>
  );
}

export default App;
