import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    // show dropdown on hover//
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseOver = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };

    // on scroll change header css//
    const controlNavbar = () => {
        if (window.scrollY) {
            document.getElementById("headerId").classList.add("darker-header");
            //   HandleClass12();
        }
        if (window.scrollY == 0) {
            document.getElementById("headerId").classList.remove("darker-header");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);
    return (
        <>
            <div className='header'>
                <div className="header__top">
                    <Container>
                        <Row className="align-items-center">
                            <Col sm="6">
                                <div className="left d-flex align-items-center">
                                    <a href="tel:+917065081062">
                                        <i className="fas fa-phone-volume" /> Call Us
                                    </a>
                                    {/* <div className="language">
            <div className="google-translate">
              {" "}
              <div id="google_translate_element">
                <div
                  className="skiptranslate goog-te-gadget"
                  dir="ltr"
                  style={{}}
                >
                  <div id=":0.targetLanguage" style={{ display: "inline" }}>
                    <select
                      className="goog-te-combo"
                      aria-label="Language Translate Widget"
                    >
                      <option value="">Select Language</option>
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="or">Odia (Oriya)</option>
                    </select>
                  </div>
                  &nbsp;&nbsp;Powered by{" "}
                  <span style={{ whiteSpace: "nowrap" }}>
                    <a
                      className="VIpgJd-ZVi9od-l4eHX-hSRGPd"
                      href="https://translate.google.com"
                      target="_blank"
                    >
                      <img
                        src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png"
                        width="37px"
                        height="14px"
                        style={{ paddingRight: 3 }}
                        alt="Google Translate"
                      />
                      Translate
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div> */}
                                </div>
                            </Col>
                            <Col sm="6">
                                <div className="right  text-end">
                                    <a href="">
                                        <i className="fas fa-user fa-fw" /> Login
                                    </a>
                                    <a href="">
                                        <i className="fas fa-user-plus fa-fw" /> Registration
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='header__bottom' id="headerId">
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto align-items-center">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <NavDropdown title="About Us" id="basic-nav-dropdown" show={showDropdown} onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}>
                                        <NavDropdown.Item href="#action/3.1">About the Temple</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">About Suma Blessings Foundation</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">
                                            Our Legal Status
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">
                                            How to Reach the Temple
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">
                                            Board Members
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#link">Management Team</Nav.Link>
                                    <Nav.Link href="#link">Contact Us</Nav.Link>
                                   
                                    <div className="nav-right">
                                        <a href="" class="cmn-btn style--three">Donate Now</a>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </>
    )
}

export default Header
