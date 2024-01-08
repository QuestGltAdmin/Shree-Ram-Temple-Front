import React from 'react'
import { Col, Row } from 'react-bootstrap'
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
    </>
  )
}
