// Import dependencies
import React from 'react';

// Import styling
import { Navbar, Nav } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/js/all';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="none" variant="light" className="p-5">
            <Navbar.Brand className="ml-5"href="/">Store Front</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto mr-auto">
                    <Nav.Link className="ml-4 mr-4" href="/marketplace">Shop</Nav.Link>
                    <Nav.Link className="ml-4 mr-4" href="#about">About</Nav.Link>
                    <Nav.Link className="ml-4 mr-4" href="//">Contact</Nav.Link>
                </Nav>
                <Nav className="mr-5">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="/cart">
                        <i class="fas fa-shopping-cart"></i>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
