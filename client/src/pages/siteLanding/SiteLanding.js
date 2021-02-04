// Import dependencies
import React from "react";

// Import styling 
import { Navbar, Nav, Button, Jumbotron, Container, Row, Col } from 'react-bootstrap';

// Import components


function SiteLanding() {
  return (
    <div> 
      {/* Header */}
      <Navbar collapseOnSelect expand="lg" bg="none" variant="light" className="p-5" fixed="top">
          <Navbar.Brand className="ml-5"href="#home">Store Front</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto mr-auto">
                  <Nav.Link className="ml-4 mr-4" href="//">Shops</Nav.Link>
                  <Nav.Link className="ml-4 mr-4" href="#about">Templates</Nav.Link>
                  <Nav.Link className="ml-4 mr-4" href="//">About</Nav.Link>
              </Nav>
              <Nav className="mr-5">
                  <Nav.Link href="//">Login</Nav.Link>
                  <Button variant="outline-dark">Dark</Button>
              </Nav>
          </Navbar.Collapse>
      </Navbar>

      {/* First jumbotron */}
      <Jumbotron fluid>
        <Container style={{height:"90vh"}}>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron> 

      {/* Second jumbotron */}
      <Jumbotron fluid>
        <Container style={{height:"30vh"}}>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>

      {/* Third jumbotron */}
      <Jumbotron fluid>
        <Container style={{height:"60vh"}}>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>

      {/* Fourth jumbotron */}
      <Jumbotron fluid>
        <Container style={{height:"90vh"}}>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>

      {/* Fifth jumbotron */}
      <Jumbotron fluid>
        <Container style={{height:"50vh"}}>
          <h1>Fluid jumbotron</h1>
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
                            <Nav.Link className="" href="#">Back to Top</Nav.Link>
                            <Nav.Link className="" href="//">Contact</Nav.Link>
                        </Col>
                    </Row>
                </Nav>
        </Navbar>
    </div>
  );
}

export default SiteLanding;
