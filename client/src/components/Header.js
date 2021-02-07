// Import dependencies
import React, { useState, useEffect } from "react";
import Token from "../utils/Token";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// Import styling
import { Navbar, Nav } from "react-bootstrap";
import "@fortawesome/fontawesome-free/js/all";

export default function Header() {
  const userAuth = Token.authenticate();
  const isSeller = Token.isSeller();
  const { currentStore } = useSelector((state) => state.stores);
  let location = useLocation();
  const [font, setFont] = useState("Helvetica Neue");
  const [fontColor, setFontColor] = useState("black");

  useEffect(() => {
    if (location.pathname.includes("storefront")) {
      setFont(currentStore.font);
      setFontColor(currentStore.font_color);
    }
  }, [location, currentStore]);

  const handleLogout = () => {
    if (!isSeller) {
      localStorage.removeItem("token");
    }
  };

  const styles = {
    navbar: {
      fontFamily: `${font}`,
      color: `${fontColor}`,
    },
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="none"
      variant="light"
      className="p-5"
    >
      <Navbar.Brand className="ml-5" href="/" style={styles.navbar}>
        Store Front
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-auto">
          <Nav.Link
            className="ml-4 mr-4"
            href="/marketplace"
            style={styles.navbar}
          >
            Shop
          </Nav.Link>
          <Nav.Link className="ml-4 mr-4" href="#about" style={styles.navbar}>
            About
          </Nav.Link>
          <Nav.Link className="ml-4 mr-4" href="//" style={styles.navbar}>
            Contact
          </Nav.Link>
        </Nav>
        <Nav className="mr-5">
          <Nav.Link
            href={isSeller ? "/storeEditor" : userAuth ? "/" : "/login"}
            style={styles.navbar}
            onClick={handleLogout}
          >
            {isSeller ? "Store Editor" : userAuth ? "Logout" : "Login"}
          </Nav.Link>
          <Nav.Link eventKey={2} href="/cart" style={{ color: fontColor }}>
            <i class="fas fa-shopping-cart"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
