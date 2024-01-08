import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <footer
                className="footer-section ">
                <div className="footer-top">
                    <Container>
                        <Row className='align-items-center'>
                            <Col md="4">
                                <div className='social-links'>
                                    <ul>
                                        <li>
                                            <a><i className="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a><i className="fab fa-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a><i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a><i className="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a><i className="fab fa-facebook-f"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className='logo-img text-center'>
                                <div className='logo-images'><img src="assets/images/logo.png" className='img-fluid' alt="" />
                            <p>श्री अग्रसेन तीर्थधाम इंदौर</p></div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className='telephone-sec text-center'>
                                    <a href="tel:+919827263013">
                                        <i className="fas fa-phone-volume" /> Call Us : +919827263013
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="footer-bottom">
                    <Container>
                        <Row>
                            <Col md="12" className="text-center ">
                                <p>
                                    Copyright © 2024 | All Rights Reserved to <a className='text-white' target='_blank' href='https://www.questglt.com/'> Quest GLT </a>.{" "}
                                    <br />
                                    {/* Website Developed by{" "}
            <a href="" target="_blank">
              {" "}
              dwsit
            </a> */}
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>

        </>
    )
}

export default Footer
