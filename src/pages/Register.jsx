import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Layout from '../component/Layout'

export const Register = () => {
  return (
    <>
    <Layout>
    <section className="login-header-strip">
         <Container>
            <Row>
               <Col>
                  <h2>Sign Up</h2>
                  <ul>
                     <li>
                        <a href="">Home</a>
                     </li>
                     <li className="active">
                        Sign Up
                     </li>
                  </ul>
               </Col>
            </Row>
           
         </Container>
      </section>
      <section className="form-login-sec">
         <Container>
             <div className="outer-box-login for-register-outer">
             <Row>
               <Col lg={12}>
                  <div className="login-form-box-main">
                      <h2>Hi. welcome to <br/> Agrasen Ji Maharaj Temple, <br/> Indore, Madhya Pradesh</h2>
                      <p>Please provide your valid infomations to get the benefits form our site.</p>

                      <div>
                            <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Full Name</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text><i className="fas fa-user" /></InputGroup.Text>
                                                <Form.Control type="text" placeholder="Full Name" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                    <Form.Group className="mb-3">
                                            <Form.Label>Phone Number</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text><i className="fas fa-phone" /></InputGroup.Text>
                                                <Form.Control type="text" placeholder="Phone Number" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    
                                    <Col lg={6}>
                                    <Form.Group className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text><i className="fas fa-lock" /></InputGroup.Text>
                                                <Form.Control type="text" placeholder="Password" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                    <Form.Group className="mb-3">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text><i className="fas fa-lock" /></InputGroup.Text>
                                                <Form.Control type="text" placeholder="Confirm Password" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    
                                </Row>
                                <Row>
                                    
                                    <Col lg={6}>
                                    <Form.Group className="mb-3">
                                            <Form.Label>Email address (Optional)</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text><i className="fas fa-envelope" /></InputGroup.Text>
                                                <Form.Control type="email" placeholder="Email address" />
                                            </InputGroup>
                                            
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                    <Form.Group className="mb-3">
                                            <Form.Label>Referral Code (Optional)</Form.Label>
                                            <Form.Control type="email" placeholder="Referral Code" />
                                        </Form.Group>
                                   
                                    </Col>
                                    
                                </Row>
                                
                                <Row>
                                    <Col lg={12}>
                                       
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="I Accept All Terms and Condition" />
                                        </Form.Group>
                                    </Col>
                                    
                                </Row>
                           
                            <a href='/login' className="cmn-btn text-center">Submit</a>
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
