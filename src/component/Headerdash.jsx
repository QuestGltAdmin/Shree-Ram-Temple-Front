import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Col, Row,NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Notification } from "../Notifications/Notification";
import { logout } from "../store/reducers/authReducer";


export default function Header() {
  //====================Global variable====================//
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {  user, proupdate } = useAuth();

  //====================End of code====================//
//===============For PopUp Modal====================//
const [openModel, setOpenModel] = useState(false);
const [modelMessage, setModelMessage] = useState("");
const [randomVal, setRandomVal] = useState("");
//===============End of code====================//
  //====================Funtion For Logout====================//
  const HandleLogout = () => {
    setModelMessage("Logged Out Successfully");
    setOpenModel(true);
    setRandomVal(Math.floor(Math.random() * 100 + 1));
    setTimeout(() => {
      dispatch(logout());
      navigate("/");
    }, 2000);
  };
  //====================End of code====================//


    return (
        <>
         <Notification
          message_mo={modelMessage}
          action_mo={openModel}
          random_val={randomVal}
        />
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
                                        <Nav.Link href="/your-membership"><i className="fas fa-id-card"></i> Your Membership</Nav.Link>
                                        <Nav.Link href="/Transactions"><i className="fas fa-exchange-alt"></i> Referral List</Nav.Link>
                                        <Nav.Link href="/Profile"><i className="fas fa-user"></i> Profile</Nav.Link>
                                        
                                        
                                        <Nav.Link onClick={(e) => {
                          HandleLogout();
                        }}><i className="fas fa-sign-out-alt"></i> Logout</Nav.Link>
                                    </Nav>
                                    </Navbar.Collapse>

                                   
                                    
                                   
                                    <Link to='/' className="ms-auto profile-dropdown">
                                        

                                        {proupdate.profile ===
                    null ? (
                      <img src="/assets/image/maharaja-agrasen.jpg" />
                    ) : (
                      <img src={proupdate.profile} className=" m-2" />
                    )}


                                     GTH4536675...</Link>
                                    <Link  className="border-btn" onClick={(e) => {
                          HandleLogout();
                        }}>Logout <i className="fa fa-sign-out"></i></Link>
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