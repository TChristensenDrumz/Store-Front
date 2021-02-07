// Import dependencies
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// Import styling
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  const { currentStore } = useSelector((state) => state.stores);
  let location = useLocation();
  const [font, setFont] = useState("Helvetica Neue");
  const [fontColor, setFontColor] = useState("white");
  const [bgColor, setBgColor] = useState("black");
  const [address, setAddress] = useState("123 Internet Way");

  useEffect(() => {
    if (location.pathname.includes("storefront")) {
      if (currentStore) {
        setFont(currentStore.font);
        setFontColor(currentStore.footer_color);
        setAddress(currentStore.address);
      }
    }
  }, [location]);

  const styles = {
    footer: {
      fontFamily: `${font}`,
      color: `${fontColor}`,
    },
  };

  return (
    <Navbar
      expand="lg"
      bg="none"
      className="p-5"
      sticky="bottom"
      style={{ backgroundColor: bgColor }}
    >
      <Nav className="ml-auto mr-auto">
        <Row>
          <Col className="text-left mr-5 pr-5">
            <Navbar.Brand
              className="ml-auto mr-auto"
              href="/"
              style={styles.footer}
            >
              Storefront
            </Navbar.Brand>
            <Navbar.Text style={styles.footer}>{address}</Navbar.Text>
          </Col>

          <Col className="text-right ml-5 pl-5">
            <Nav.Link href="#" style={styles.footer}>
              Back to Top
            </Nav.Link>
            <Nav.Link href="/storefront/contact" style={styles.footer}>
              Contact
            </Nav.Link>
          </Col>
        </Row>
      </Nav>
    </Navbar>
  );
}
