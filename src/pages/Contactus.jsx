import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";

export const Contactus = () => {
    return (
        <>
            <Layout>
                <section className="contact-form-area">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={7} className="contact-forms">
                                <div class="content">
                                    <h3>Temple Location</h3>
                                    <div class="maps-area">
                                        <iframe
                                            width="100%"
                                            height="500"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.94958915675!2d75.6990360735278!3d22.72420499694239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1704977345623!5m2!1sen!2sinn"
                                        ></iframe>
                                    </div>
                                </div>
                            </Col>
                            <Col md={5} className="address-info">
                                <div class="address-items">
                                    <ul>
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i>
                                            <p>
                                                Head Office
                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
                                            </p>
                                        </li>
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i>
                                            <p>
                                                Temple Location
                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </p>
                                        </li>
                                        <li>
                                            <i class="fas fa-envelope-open"></i>
                                            <p>
                                                Send Us Mail
                                                <span>info@gmail.com</span>
                                            </p>
                                        </li>
                                        <li>
                                            <i class="fas fa-mobile-alt"></i>
                                            <p>
                                                Call Us
                                                <span>+911234567890</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </>
    )
}
