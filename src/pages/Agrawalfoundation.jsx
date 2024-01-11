import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";

export const Agrawalfoundation = () => {
  return (
    <>
    <Layout>
        <section className="login-header-strip">
            <Container>
                <Row>
                <Col>
                    <h2>About Us</h2>
                    <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li className="active">About Us</li>
                    </ul>
                </Col>
                </Row>
            </Container>
        </section>
        <section className="aboutus-sec-outer about-agrwal-sec">
            <Container className="about-container">
            <Row className="pb-50 align-items-center">
                <Col lg={6} className="order-2">
                    <div className="outer-about-box">
                        <h3>Jai Agrasen Maharaja!</h3>
                        <ul>
                            <li>Agrasen Maharaja Temple Indore is a Hindu temple that is under construction in Indore, MP, India. The temple construction is being supervised by the Agrawal Foundation, which was established in May 2021 in Delhi, the capital city of India. It is a Non - Profit and religious organization that works for the development of our country. It was founded by Basant Jena, a young Businessman & Entrepreneur. The ground-breaking ceremony was performed on the 5th of May 2023.</li>
                            <li> The motive of this foundation is for the development of the country in various segments like the field of Research and Development (R&D), Education, Health & Nutrition, Skill Development, Rural Development, Environmental, Women Empowerment, Religious Activities, etc.</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={6}>
                  <img
                    src="assets/image/about3.jpg"
                    className="img-fluid w-100 "
                    alt=""
                  />
                </Col>
            </Row>
            <Row className="pb-50">
                <Col lg={6} >
                    <div className="outer-about-box">
                        <h3>Religious Activities</h3>
                        <ul>
                            <li><i className="fas fa-check-circle" /> To promote Hindu religion by organizing religious programs with the help of Religious Priests & Saints and to spread the teachings & thoughts of great philosophers, thinkers, reformers and saints of Hindu Religion.</li>
                            <li><i className="fas fa-check-circle" /> Organizing religious events and to take complete responsibility of the same.</li>
                            <li><i className="fas fa-check-circle" /> Construction & maintenance of Hindu temples, institutions to promote religious & social responsibility.</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={6}>
                  <img
                    src="assets/image/about-us.jpg"
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
