import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Layout from '../component/Layout'

export const Donatenow = () => {
  return (
    <>
    <Layout>
    {/* <section className="login-header-strip">
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
      </section> */}
      <section className="form-login-sec">
         <Container>
             <div className="outer-box-login for-register-outer">
             <Row>
               <Col lg={12}>
                  <div className="login-form-box-main">
                      <h2>Donate Now</h2>

                      <div>
                        
                         <Form.Group className="mb-3">
                            <Form.Label>Select Amount</Form.Label>
                            <Form.Select className="mb-3">
                                <option>Select Amount</option>
                                <option value="1">501</option>
                                <option value="2">1100</option>
                                <option value="3">2100</option>
                                <option value="4">5100</option>
                                <option value="5">11000</option>
                                <option value="6">21000</option>
                                <option value="7">51000</option>
                            </Form.Select>

                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Other Amount</Form.Label>
                            <Form.Control type="text" placeholder="Other Amount" />
                        </Form.Group>

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
