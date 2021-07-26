import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "../assets/style/components/header.scss";

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () =>{
    return(
        <>
        <header className="header">
        <Navbar collapseOnSelect expand="md" variant="dark" className="navbar">
                <Navbar.Brand href="#home">SEO Solution</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="item">
                    <Nav className="mr-auto">
                        <a className="navbar__item" href=".header">About</a>
                        <a className="navbar__item" href=".header">Tutors</a>
                        <a className="navbar__item" href=".header">Programs</a>
                        <a className="navbar__item" href=".header">Location</a>
                        <a className="navbar__item" href=".header">Book a place</a>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </header>
        </>
    )
}

export default Header