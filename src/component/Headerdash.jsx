import React from "react";
import { Navbar, Container, Nav, Button, Col, Row,NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Header() {


    return (
        <>
            <header className="main-header login-header-home">
                <Navbar expand="lg" sticky="top">
                    <Container fluid>

                        <Row className="w-100 m-auto">
                            <Col>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Navbar.Brand href="/">
                                        <img src="assets/images/logo.png" />
                                        <span>श्री अग्रसेन तीर्थधाम इंदौर</span>
                                    </Navbar.Brand>
                                    
                                    <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="/Dashboard"><i className="fas fa-th-large"></i> Dashboard</Nav.Link>
                                        <Nav.Link href="/Transactions"><i className="fas fa-exchange-alt"></i> Referral List</Nav.Link>
                                        <Nav.Link href="/Profile"><i className="fas fa-user"></i> Profile</Nav.Link>
                                        
                                        
                                        <Nav.Link href="/"><i className="fas fa-sign-out-alt"></i> Logout</Nav.Link>
                                    </Nav>
                                    </Navbar.Collapse>

                                   
                                    
                                   
                                    <Link to='/' className="ms-auto profile-dropdown"><img src="/assets/image/maharaja-agrasen.jpg" /> GTH4536675...</Link>
                                    <Link to='/' className="border-btn">Logout <i className="fa fa-sign-out"></i></Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}