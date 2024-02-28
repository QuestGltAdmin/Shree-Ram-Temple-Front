import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";

export const Resetpass = () => {
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
                        Reset Password
                        </h2>
                        <p>You Want to Reset Your Password</p>
    
                        <div className="mt-5">
                          <Form.Group className="mb-3">
                            <Form.Label>Enter New Password</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <i className="fas fa-key" />
                              </InputGroup.Text>
                              <Form.Control
                               
                                placeholder="Enter New Password"
                                name="password"
                              />
                              
                            </InputGroup>
                            
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Confirm New Password</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <i className="fas fa-key" />
                              </InputGroup.Text>
                              <Form.Control
                               
                                placeholder="Confirm New Password"
                                name="password"
                              />
                              
                            </InputGroup>
                            
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
