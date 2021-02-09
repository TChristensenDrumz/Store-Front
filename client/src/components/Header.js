// Import dependencies
import React, { useState, useEffect } from "react";
import Token from "../utils/Token";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import Alert from "./Alert";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

// Import styling
import { Navbar, Nav } from "react-bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import { getCurrentStore } from "../redux/actions/stores.actions";

export default function Header() {
  const userAuth = Token.authenticate();
  const isSeller = Token.isSeller();
  const { currentStore, ownerStore } = useSelector((state) => state.stores);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [font, setFont] = useState("Roboto");
  const [fontColor, setFontColor] = useState("black");
  const [show, setShow] = useState(false);
  const [redirect, setRedirect] = useState("/#about");
  const [shop, setShop] = useState("/marketplace");
  const [storeName, setStoreName] = useState("Store Front");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (location.pathname.includes("storefront")) {
      if (currentStore.id) {
        setFont(currentStore.font);
        setFontColor(currentStore.font_color);
        setShop("/storefront/allproducts/" + currentStore.id);
        setStoreName(currentStore.store_name);
      }
    } else if (location.pathname === "/storeEditor") {
        if (ownerStore.id) {
          setFont(ownerStore.font);
          setFontColor(ownerStore.fontColor);
          setStoreName(ownerStore.store_name);
        };
    } else {
      dispatch(getCurrentStore({}));
    }
    if (currentStore) {
      if (currentStore.id) {
        setRedirect(`/storefront/${currentStore.id}#about`);
      }
    }
  }, [location]);

  const handleManager = () => {
    if (isSeller || userAuth) {
      handleShow();
    } else {
      history.push("/login");
    }
  };

  const handleLogout = () => {
    handleClose();
    localStorage.removeItem("token");
    history.push("/login");
  };

  const handleCart = () => {
    if (!userAuth) {
      handleShow();
      return;
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
    <>
      {isSeller ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>Would you like to edit your store or logout?</Modal.Body>
          <Modal.Footer>
            <Button href="/storeEditor" variant="primary" onClick={handleClose}>
              Store Editor
            </Button>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : userAuth ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>Would you like to logout?</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Alert
          show={show}
          handleClose={handleClose}
          title={"Store Front"}
          message={
            "Please sign in or create an account to add to/view your cart"
          }
        />
      )}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="none"
        variant="light"
        className="p-5"
      >
        <Navbar.Brand className="ml-5" href="/" style={styles.navbar}>
          {storeName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <Nav.Link
              className="ml-4 mr-4"
              href={shop}
              style={styles.navbar}
            >
              Shop
            </Nav.Link>
            <Link
              className="ml-4 mr-4"
              to={redirect}
              style={{
                fontFamily: `${font}`,
                color: `${fontColor}`,
                marginTop: "8px",
              }}
            >
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
            <Nav.Link style={styles.navbar} onClick={handleManager}>
              {isSeller || userAuth ? "Account" : "Login"}
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
    </>
  );
}
