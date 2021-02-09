// Import dependencies
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import windowDimensions from "../utils/GetWindowDimensions";

// Import styling
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

export default function Footer({position = ""}) {
  let windowHeight = windowDimensions();
  const { currentStore } = useSelector((state) => state.stores);
  let location = useLocation();
  const [font, setFont] = useState("Roboto");
  const [fontColor, setFontColor] = useState("white");
  const [bgColor, setBgColor] = useState("black");
  const [address, setAddress] = useState("123 Internet Way");
  const [footer, setFooter] = useState(0);
  const [storeName, setStoreName] = useState("Store Front")
  const [redirect, setRedirect] = useState("/");
  const [footerPosition, setFooterPosition] = useState(position);

  useEffect(() => {
    if (location.pathname.includes("storefront")) {
      if (currentStore.id) {
        setFont(currentStore.font);
        setFontColor(currentStore.footer_color);
        setBgColor(currentStore.accent_color);
        setAddress(currentStore.address);
        setStoreName(currentStore.store_name);
        setRedirect(`/storefront/${currentStore.id}`);
      };
    };
    let footerPosition = document.querySelector("#foot");
      let foot = footerPosition.getBoundingClientRect().bottom;
      if (window.innerHeight > foot) {
        setFooter(window.innerHeight - foot);
      };
  }, [location]);

  const styles = {
    footer: {
      fontFamily: `${font}`,
      color: `${fontColor}`
    }
  };

  return (
    <div style={{marginTop: footer}}>
    <Navbar
      expand="lg"
      bg="none"
      className="p-5"
      id="foot"
      sticky="bottom"
      fixed={footerPosition}
      style={{ backgroundColor: bgColor }}
    >
      <Nav className="ml-auto mr-auto">
        <Row style={{width: "50vw"}}>
          <Col className="text-left mr-5 pr-5">
            <Navbar.Brand
              className="ml-auto mr-auto"
              href={redirect}
              style={styles.footer}
            >
              {storeName}
            </Navbar.Brand>
          </Col>
          <Col className="text-right ml-5 pl-5">
          <Navbar.Brand href="/storefront/contact" className="ml-auto mr-auto" style={styles.footer}>
              Contact
            </Navbar.Brand>
          </Col>
        </Row>
      </Nav>
    </Navbar>
    </div>
  );
}
