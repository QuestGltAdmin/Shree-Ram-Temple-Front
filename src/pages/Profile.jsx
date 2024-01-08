import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Layout from '../component/Layout'

export const Profile = () => {
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
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="email" placeholder="First Name" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="email" placeholder="Last Name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="email" placeholder="Phone Number" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                               <Form.Group className="mb-3">
                                    <Form.Label>Father's Name</Form.Label>
                                    <Form.Control type="email" placeholder="Father's Name" />
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Business</Form.Label>
                                    <Form.Control type="email" placeholder="Business" />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Blood Group</Form.Label>
                                <Form.Control type="email" placeholder="Blood Group" />
                            </Form.Group>
                            </Col>
                        </Row>
                        
                            <Form.Group className="mb-3">
                                <Form.Label>Your Address</Form.Label>
                                <Form.Control type="email" placeholder="Your Address" />
                            </Form.Group>
                           
                            <Form.Group className="mb-3">
                                <Form.Label>Email address (Optional)</Form.Label>
                                <Form.Control type="email" placeholder="Email address" />
                            </Form.Group>
                            <p className='pass-line'></p>
                            <button className="cmn-btn">Submit</button>
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
