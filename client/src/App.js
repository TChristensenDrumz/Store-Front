// Import dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import CartItem from "./components/CartItem";
import EmailPassword from "./components/EmailPassword";
import NameInput from "./components/NameInput";

// Import pages
import Cart from "./pages/cart/Cart";
import StoreLanding from "./pages/storeLanding/StoreLanding";
import SiteLanding from "./pages/siteLanding/SiteLanding";
import AllProducts from "./pages/allProducts/allProducts"
import ContactStore from "./pages/contactStore/ContactStore";
import ProtectedRoute from "./components/ProtectedRoute";

// Import Pages
import Login from "./pages/login/Login";
import OwnerLogin from "./pages/ownerLogin/OwnerLogin";
import CreateAccount from "./pages/createAccount/CreateAccount";
import CreateOwnerAccount from "./pages/createOwnerAccount/CreateOwnerAccount";
import EditStore from "./pages/editStore/EditStore";



function App() {
  return (
    <Router>
      <Header />
        <Route exact path="/login" component={Login} />
        <Route exact path="/ologin" component={OwnerLogin} />
        <Route exact path="/csignup" component={CreateAccount} />
        <Route exact path="/osignup" component={CreateOwnerAccount} />
        {/* <Route exact path="/">
          <ProtectedRoute component={SiteLanding} />
        </Route> */}
        <Route exact path="/" component={SiteLanding} />
        <Route exact path="/storeEditor">
          <ProtectedRoute component={EditStore} />
        </Route>
        <Route exact path="/storefront/:storeId" component={StoreLanding} />
      <Footer />
    </Router>
  );
}

export default App;
