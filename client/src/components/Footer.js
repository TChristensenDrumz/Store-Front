// Import dependencies
import React from 'react'

// Import styling
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <Navbar expand="lg" bg="none" variant="light" className="p-5" >
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
    )
}
