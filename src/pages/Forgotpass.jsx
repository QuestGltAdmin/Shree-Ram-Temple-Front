
import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";



export const Forgotpass = () => {
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
                    Forgot Password
                    </h2>
                    <p>Please Provide Your Email Address</p>

                    <div className="mt-5">
                      <Form.Group className="mb-3">
                        <Form.Label>Enter Your Email</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <i className="fas fa-envelope" />
                          </InputGroup.Text>
                          <Form.Control
                           
                            placeholder="Enter Your Email Address"
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
