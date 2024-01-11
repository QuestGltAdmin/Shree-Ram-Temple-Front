import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";

export const Boardmember = () => {
  return (
    <>
    <Layout>
        <section className="login-header-strip">
            <Container>
                <Row>
                <Col>
                    <h2>Board Members</h2>
                    <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li className="active">Board Members</li>
                    </ul>
                </Col>
                </Row>
            </Container>
        </section>
        <section className="board-member-sec">
            <Container className="about-container">
                <Row className="">
                    <Col md={3} className="m-auto">
                        <div className="board-member-outer">
                            <img
                                src="assets/image/user-dummy.webp"
                                className="img-fluid w-100 "
                                alt=""
                            />
                            <h4>Mr. Madan Agrawal</h4>
                            <h5>Chairman</h5>
                        </div>
                    </Col>
                    <Col md={3} className="m-auto">
                        <div className="board-member-outer">
                            <img
                                src="assets/image/user-dummy.webp"
                                className="img-fluid w-100 "
                                alt=""
                            />
                            <h4>Mr. Basu Tibadevala</h4>
                            <h5>Secretary</h5>
                        </div>
                    </Col>
                    <Col md={3} className="m-auto">
                        <div className="board-member-outer">
                            <img
                                src="assets/image/user-dummy.webp"
                                className="img-fluid w-100 "
                                alt=""
                            />
                            <h4>Mr. Gaurav Agrawal</h4>
                            <h5>Treasurer</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Layout>
  </>
  )
}
