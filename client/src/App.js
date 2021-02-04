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
import Cart from "./pages/cart/Cart";
import StoreLanding from "./pages/storeLanding/StoreLanding";
import AllProducts from "./pages/allProducts/allProducts"
import EditStore from "./pages/editStore/EditStore";
import ContactStore from "./pages/contactStore/ContactStore";
import LoginPage from "./pages/login/Login";


function App() {
  return (
    <Router>
      <Header />
        <Route exact path="/">
          <StoreLanding />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/contact">
          <ContactStore />
        </Route>
        <Route exact path="/:storeid/editor">
          <EditStore />
        </Route>
      <Footer />
    </Router>
  );
}

export default App;
