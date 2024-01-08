import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export const Login = () => {
  return (
    <>
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
      <section className="">
         <Container>
            <Row>
               <Col lg={6}>
                  <div>
                     <img src="assets/image/agrsen-img.jpg" alt="" />     
                  </div>
               </Col>
               <Col lg={6}>
                  <div>
                      <h2>Hi. welcome to Shri Ram Temple Kamarpal, Balasore, Odisha</h2>
                      <p>Please Provide Your Valid Credentials</p>

                      <div>
                            <Form.Group className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="email" placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="email" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address (Optional)</Form.Label>
                                <Form.Control type="email" placeholder="Email address" />
                            </Form.Group>
                            <button>Submit</button>
                      </div>
                  </div>
               </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}
