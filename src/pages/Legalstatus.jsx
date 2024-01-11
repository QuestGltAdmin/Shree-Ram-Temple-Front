import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";

export const Legalstatus = () => {
  return (
    <>
    <Layout>
        <section className="login-header-strip">
            <Container>
                <Row>
                <Col>
                    <h2>Our Legal Status</h2>
                    <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li className="active">Our Legal Status</li>
                    </ul>
                </Col>
                </Row>
            </Container>
        </section>
        <section className="aboutus-sec-outer about-agrwal-sec">
            <Container className="about-container">
                <Row className="pb-50 align-items-center">
                    <Col lg={10} className="m-auto">
                        <div className="legal-box-outer">
                            <h3>Regd. No 123456</h3>
                            <h4>Agrawal Tirthdham Foundation Legal Documents</h4>
                            <p>We fromAgrawal Tirthdham Foundation are pleased to build the BHAVYA & DIVYA SHRI RAM TEMPLE at Indore, Madhya Pradesh</p>
                            <ul>
                                <li>We fromAgrawal Tirthdham Foundation are pleased to build the BHAVYA & DIVYA SHRI RAM TEMPLE at Indore <a href="">View Document <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                <li>Document XYZ <a href="">View Document <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                <li>Document XYZ <a href="">View Document <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                <li>Document XYZ <a href="">View Document <i class="fas fa-long-arrow-alt-right"></i></a></li>
                                <li>Document XYZ <a href="">View Document <i class="fas fa-long-arrow-alt-right"></i></a></li>
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
