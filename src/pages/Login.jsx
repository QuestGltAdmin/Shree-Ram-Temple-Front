import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Layout from '../component/Layout'

export const Login = () => {
  return (
    <>
    <Layout>
    <section className="login-header-strip">
         <Container>
            <Row>
               <Col>
                  <h2>Sign In</h2>
                  <ul>
                     <li>
                        <a href="">Home</a>
                     </li>
                     <li className="active">
                        Sign In
                     </li>
                  </ul>
               </Col>
            </Row>
           
         </Container>
      </section>
      <section className="form-login-sec">
         <Container>
             <div className="outer-box-login">
             <Row>
               <Col lg={6}>
               <img src="assets/image/maharaja-agrasen.jpg" className="img-fluid left-img-login" alt="" /> 
               </Col>
               <Col lg={6}>
                  <div className="login-form-box-main">
                      <h2>Hi. welcome to <br/> Agrasen Ji Maharaj Temple, <br/> Indore, Madhya Pradesh</h2>
                      <p>Please Provide Your Valid Credentials</p>

                      <div>
                            <Form.Group className="mb-3">
                                <Form.Label>User Name</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><i className="fas fa-user" /></InputGroup.Text>
                                    <Form.Control type="text" placeholder="User Name" />
                                </InputGroup>
                                
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text><i className="fas fa-key" /></InputGroup.Text>
                                    <Form.Control type="text" placeholder="Password" />
                                </InputGroup>
                            </Form.Group>
                           
                            <p className='pass-line'><a href="">Forgot Password?</a></p>
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
