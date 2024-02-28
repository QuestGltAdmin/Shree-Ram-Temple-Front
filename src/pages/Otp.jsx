import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";

export const Otp = () => {
    return (
        <>
          <Layout>
            
            <section className="form-login-sec">
              <Container>
                <div className="outer-box-login">
                  <Row>
                    <Col lg={6}>
                      <img
                        src="assets/image/maharaja-agrasen.jpg"
                        className="img-fluid left-img-login"
                        alt=""
                      />
                    </Col>
                    <Col lg={6}>
                      <div className="login-form-box-main pt-5">
                        <h2>
                        One Time Password
                        </h2>
                        <p>Please Enter OTP</p>
    
                        <div className="mt-5">
                          <Form.Group className="mb-3">
                            <Form.Label>Enter OTP</Form.Label>
                            <Form.Control
                               
                                placeholder="Enter OTP"
                                name="password"
                              />
                            
                          </Form.Group>
                         
    
                         
                          <button
                            className="cmn-btn"
                            
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </section>
          </Layout>
        </>
      )
}
