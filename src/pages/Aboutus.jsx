import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";

export const Aboutus = () => {
  return (
    <>
    <Layout>
        <section className="login-header-strip">
            <Container>
                <Row>
                <Col>
                    <h2>About the Temple</h2>
                    <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li className="active">About the Temple</li>
                    </ul>
                </Col>
                </Row>
            </Container>
        </section>
        <section className="aboutus-sec-outer">
            <Container className="about-container">
            <Row className="pb-50">
                <Col lg={6}>
                    <div className="outer-about-box">
                        <h3>Agrasen Maharaja Temple Indore</h3>
                        <ul>
                            <li><i className="fas fa-check-circle" /> Agrasen Maharaja Temple Indore is a Hindu temple that is under construction in Balasore, Odisha, India. The temple construction is being supervised by the Agrawal Foundation, which was established in May 2021 in Delhi, the capital city of India. It is a Non - Profit and religious organization that works for the development of our country. It was founded by Basant Jena, a young Businessman & Entrepreneur. The ground-breaking ceremony was performed on the 5th of May 2023. </li>
                            <li><i className="fas fa-check-circle" /> The construction work is going on at a distance of 67 km from the Balasore Railway Station and 17 km from Soro Railway Station. The Temple is a wonderful architectural model which will attract a good number of visitors to this site. The building with pink stone will have many side deities on the temple campus.</li>
                            <li><i className="fas fa-check-circle" /> All the rituals are being observed as per the Agrasen Maharaja Temple Ayodhya. The stone curving and the monumental artifact will draw the attraction of visitors.</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={6}>
                  <img
                    src="assets/image/about2.jpg"
                    className="img-fluid w-100 "
                    alt=""
                  />
                </Col>
            </Row>
            <Row className="pb-50">
                <Col lg={6} className="order-2">
                    <div className="outer-about-box">
                        <h3>Construction Details</h3>
                        <ul>
                            <li><i className="fas fa-check-circle" /> <strong>Total Temple Area:</strong>&nbsp;84,214 Sqft</li>
                            <li><i className="fas fa-check-circle" /> <strong>Garbh Griha:</strong> 19ft 2’’ x 19ft 2’’</li>
                            <li><i className="fas fa-check-circle" /> <strong>Temple Built-up Area:</strong>11,463&nbsp;sq. ft.</li>
                            <li><i className="fas fa-check-circle" /> <strong>The total length of the temple:</strong>125 feet</li>
                            <li><i className="fas fa-check-circle" /> <strong>Total width of the temple:</strong>70 feet</li>
                            <li><i className="fas fa-check-circle" /> <strong>The total height of the temple including the peak:</strong>&nbsp;82&nbsp;feet</li>
                            <li><i className="fas fa-check-circle" /> <strong>Total number of floors:</strong> 2</li>
                            <li><i className="fas fa-check-circle" /> <strong>Height of each floor: </strong>15 feet</li>
                            <li><i className="fas fa-check-circle" /> <strong>Number of Gates in the temple:</strong>&nbsp;2</li>
                            <li><i className="fas fa-check-circle" /> <strong>No. of columns in the first floor of the temple:</strong> 54</li>
                            <li><i className="fas fa-check-circle" /> <strong>No. of columns in the ground floor of the temple:</strong> 86</li>
                            <li><i className="fas fa-check-circle" /> <strong>No. of Pavilions in the Temple:</strong> 3</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={6}>
                  <img
                    src="assets/image/about1.jpg"
                    className="img-fluid w-100 "
                    alt=""
                  />
                </Col>
            </Row>
            </Container>
            <div className="united-sec">
                <Container>
                    <Row>
                    <Col md="12">
                        <div className="united-box row">
                        <div className="col-lg-10 text-center set-content">
                            <h2 className="text-white section-title">
                            Let's get united to build the Bhavya and Divya temple in
                            Indore, Madhya Pradesh
                            </h2>
                            <p className="para text-white">
                            Serve the God by sharing your contribution.
                            </p>
                            <a href="" className="cmn-btn mt-50">
                            Contribute Now!
                            </a>
                        </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
                </div>
        </section>
    </Layout>
  </>
  )
}
