// Import dependencies
import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import {
  getAllStores,
  getCurrentStore,
} from "../../redux/actions/stores.actions";
import Token from "../../utils/Token";
import { Link } from "react-router-dom";

// Import styling
import {
  Navbar,
  Nav,
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./SiteLanding.css";

// Import images
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.png";
import bg5 from "../../assets/bg5.png";

function SiteLanding(props) {
  const [bg, setBg] = useState(true);
  const dispatch = useDispatch();
  const isSeller = Token.isSeller();
  const userAuth = Token.authenticate();

  useEffect(() => {
    const hash = props.history.location.hash;
    console.log(hash);
    if (hash && document.getElementById(hash.substr(1))) {
      // Check if there is a hash and if an element with that id exists
      document
        .getElementById(hash.substr(1))
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [props.history.location.hash]); // Fires every time hash changes

  useEffect(() => {
    api
      .landingStores()
      .then((allStores) => {
        dispatch(getAllStores(allStores.data));
        dispatch(getCurrentStore({}));
      })
      .catch((err) => console.log(err));
  }, []);

  const changeBg = () => {
    if (window.scrollY >= 88) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const bgs = {
    first: {
      backgroundImage: `url(${bg1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "120vh",
      width: "100vw"
    },

    second: {
      backgroundImage: `url(${bg2})`,
      backgroundSize: "cover",
      backgroundPosition: "left",
      backgroundRepeat: "no-repeat",
      height: "90vh",
      width: "100vw"
    },

    third: {
      backgroundImage: `url(${bg3})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "90vh",
      width: "100vw"
    },

    fifth: {
      backgroundImage: `url(${bg5})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "75vh",
      width: "100vw"
    },
  };

  const styles = {
    first: {
      paddingTop: "27vh",
      marginLeft: "5vw",
      color: "white",
      width: "40vw"
    },

    second: {
      paddingTop: "6vh",
      marginRight: "-6rem",
    },

    third: {
      paddingTop: "2vh",
      marginLeft: "10vw",
      lineHeight: ".5em"
    },

    fourth: {
      paddingTop: "5rem",
    },

    fifth: {
      marginLeft: "5vw",
      paddingTop: "5vh",
    },
  };

  return (
    <div>
      {/* Header */}
      <Navbar
        collapseOnSelect
        expand="lg"
        className={bg ? "navbar active p-4" : "navbar p-4"}
        variant="dark"
        fixed="top"
        id="top"
      >
        <Navbar.Brand className="ml-5" href="/">
          Store Front
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <Nav.Link
              className="ml-4 mr-4"
              style={{ color: "white" }}
              href="/marketplace"
            >
              Shops
            </Nav.Link>
            {isSeller ? (
              <Nav.Link
                className="ml-4 mr-4"
                style={{ color: "white" }}
                href="/storeEditor"
              >
                Store Editor
              </Nav.Link>
            ) : (
              <div />
            )}
            <Link
              className="ml-4 mr-4"
              style={{ color: "white", marginTop: "8px" }}
              to="/#about"
            >
              About
            </Link>
          </Nav>
          <Nav className="mr-5">
            <Nav.Link
              style={{ color: "white" }}
              href={userAuth ? "/" : "/login"}
              onClick={handleLogout}
            >
              {userAuth ? "Logout" : "Login"}
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              href={isSeller ? "/storeEditor" : "/signup"}
            >
              Get Started
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* First jumbotron */}
      <div className="margin0" style={bgs.first}>
        <div style={{width: "90vw"}}>
          <div className="align-items-center justify-content-center">
            <div style={styles.first}>
              <h1>Customize your own web store.</h1>
              <p>
                Create your own store front. Sell Products. Shop other stores.
                Create an account today.
              </p>
              <a href={isSeller ? "/storeEditor" : "/signup"}>
                <Button variant="dark" size="lg">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second jumbotron */}
      <div className="margin0" style={bgs.second}>
      <div style={{width: "90vw"}}>
          <div className="text-right" style={styles.second}>
            <h1>Visit our merchants</h1>
            <p>
              Visit the Store Front Marketplace and shop with our participating
              vendors.
            </p>

            <Button href="/marketplace" style={{ backgroundColor: "black" }}>
              Store Front Marketplace
            </Button>
          </div>
        </div>
      </div>

      {/* Third jumbotron */}
      <div className="margin0" style={bgs.third}>
      <div style={{width: "90vw"}}>
          <div style={styles.third}>
            <h1>Create your own store front</h1>
            <p>
              Dynamically create a fully functional ecommerce website
              with checkout in less than 5 minutes.</p> <p>Use our store editor to get
              the custom feel you want for your shop.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth jumbotron */}
      <div className="margin0">
        <Container style={{ height: "55vh" }}>
          <Row>
            <Col>
              <div style={styles.fourth}>
                <h1>Get Started</h1>
                <h4>
                  1. Make your store front account.{" "}
                  <a
                    href="/signup"
                    style={{ textDecoration: "underline", color: "black" }}
                  >
                    Create an account here
                  </a>
                  .
                </h4>
                <h4>2. Add store details, images, products.</h4>
                <h4>3. Customize font, colors, user experience.</h4>
                <h4>4. Start selling.</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Fifth jumbotron */}
      <div className="margin0" style={bgs.fifth} id="about">
      <div style={{width: "90vw"}}>
          <div style={styles.fifth}>
            <h1>Meet The Team</h1>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Navbar
        expand="lg"
        bg="none"
        variant="light"
        className="p-5"
        sticky="bottom"
      >
        <Nav className="ml-auto mr-auto">
          <Row>
            <Col className="text-left mr-5 pr-5">
              <Navbar.Brand className="ml-auto mr-auto" href="/">
                Store Front
              </Navbar.Brand>
            </Col>

            <Col className="text-right ml-5 pl-5">
              <Nav.Link className="" href="/storefront/contact">
                Contact
              </Nav.Link>
              <Nav.Link
                className=""
                href="https://github.com/DJ620/store-front-react"
                target="_blank"
              >
                Github
              </Nav.Link>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </div>
  );
}

export default SiteLanding;
