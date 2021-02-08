// Import dependencies
import React, { useState, useEffect } from "react";
import Token from "../utils/Token";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import Alert from "./Alert";
import { Link } from "react-router-dom";

// Import styling
import { Navbar, Nav } from "react-bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import { getCurrentStore } from "../redux/actions/stores.actions";

export default function Header() {
  const userAuth = Token.authenticate();
  const isSeller = Token.isSeller();
  const { currentStore } = useSelector((state) => state.stores);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [font, setFont] = useState("Helvetica Neue");
  const [fontColor, setFontColor] = useState("black");
  const [show, setShow] = useState(false);
  const [redirect, setRedirect] = useState("/#about");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (location.pathname.includes("storefront")) {
      if (currentStore) {
        setFont(currentStore.font);
        setFontColor(currentStore.font_color);
      }
    } else {
      console.log("taking away current store");
      dispatch(getCurrentStore({}));
    };
    if (currentStore) {
      if (currentStore.id) {
        setRedirect(`/storefront/${currentStore.id}#about`);
      };
    }
  }, [location.pathname]);

  const handleLogout = () => {
    if (!isSeller) {
      localStorage.removeItem("token");
    }
  };

  const handleCart = () => {
    if (!userAuth) {
      handleShow();
      return (
        <Alert
          show={show}
          handleClose={handleClose}
          title={"Store Editor"}
          message={
            "Please sign in or create an account to add to/view your cart"
          }
          button={"OK"}
        />
      );
    }
    history.push("/cart");
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
          <Link className="ml-4 mr-4" to ={redirect} style={
            {
              fontFamily: `${font}`,
              color: `${fontColor}`,
              marginTop:"8px"
            }
          }>
            About
          </Link>
          <Nav.Link
            className="ml-4 mr-4"
            href="/storefront/contact"
            style={styles.navbar}
          >
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
          <Nav.Link
            eventKey={2}
            style={{ color: fontColor }}
            onClick={handleCart}
          >
            <i class="fas fa-shopping-cart"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
