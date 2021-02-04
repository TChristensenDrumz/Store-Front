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
import EditStore from "./pages/editStore/EditStore";
import ContactStore from "./pages/contactStore/ContactStore";



function App() {
  return (
    <Router>
      <Header />
      <ContactStore />
      <Footer />
    </Router>
  );
}

export default App;
