// Import dependencies
import React, { useState } from "react";
import api from "../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getAllStores } from "../../redux/actions/stores.actions";

// Import styling 
import { Navbar, Nav, Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import './SiteLanding.css'

// Import components


function SiteLanding() {
  const [bg, setBg ] = useState(false);
  
  const changeBg = () => {
    if(window.scrollY >= 88) {
      setBg(true);
    } else {
      setBg(false);
    };
  };

window.addEventListener('scroll', changeBg)

  return (
    <div> 
      {/* Header */}
      <Navbar collapseOnSelect expand="lg" className={bg ? 'navbar active p-4' : 'navbar p-4'} variant="dark" fixed="top" id="top">
          <Navbar.Brand className="ml-5"href="#home">Store Front</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto mr-auto">
                  <Nav.Link className="ml-4 mr-4" style={{color:"white"}} href="/shops">Shops</Nav.Link>
                  <Nav.Link className="ml-4 mr-4" style={{color:"white"}} href="/templates">Templates</Nav.Link>
                  <Nav.Link className="ml-4 mr-4" style={{color:"white"}} href="/about">About</Nav.Link>
              </Nav>
              <Nav className="mr-5">
                  <Nav.Link style={{color:"white"}} href="/login">Login</Nav.Link>
                  <Nav.Link style={{color:"white"}} href="/create">Get Started</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>

      {/* First jumbotron */}
      <Jumbotron className="margin0">
        <Container style={{height:"90vh"}}>
          <div className="align-items-center justify-content-center">
              <h1>Customize your own web store.</h1>
              <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
              </p>
              <Button variant="dark" size='lg'>Get Started</Button>
            </div>
        </Container>
      </Jumbotron> 

      {/* Second jumbotron */}
      <Jumbotron className="margin0">
        <Container style={{height:"50vh"}}>
          <h1>Create your own store front</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>

      <Jumbotron className="margin0">
        <Container style={{height:"90vh"}}>
          <h1>Visit our merchants</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>

      {/* Third jumbotron */}
      <Jumbotron className="margin0">
        <Container style={{height:"60vh"}}>
          <h1>How It Works</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>

      {/* Footer */}
      <Navbar expand="lg" bg="none" variant="light" className="p-5" sticky="bottom">
                <Nav className="ml-auto mr-auto">
                    <Row>
                        <Col className="text-left mr-5 pr-5">
                            <Navbar.Brand className="ml-auto mr-auto"href="#home">Storefront</Navbar.Brand>
                            <Navbar.Text className="">Address</Navbar.Text>
                        </Col>

                        <Col className="text-right ml-5 pl-5">
                            <Nav.Link className="" href="//">Contact</Nav.Link>
                            <Nav.Link className="" href="https://github.com/DJ620/store-front-react" target="_blank">Github</Nav.Link>
                        </Col>
                    </Row>
                </Nav>
        </Navbar>
    </div>
  );
};

export default SiteLanding;
