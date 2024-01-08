
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table, Form, Pagination } from 'react-bootstrap';
import Layoutdash from '../../component/Layoutdash';



const Dashboard = () => {

  return (
    <>
      <Layoutdash>
        <section className="outer-dash-section">

          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading">Dashboard</h2>
                    <Row>
                      <Col lg={4} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <p>Total Donation</p>
                          <h4>10,00,000</h4>
                        </div>
                      </Col>
                      
                      <Col lg={4} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <p>Total Referral</p>
                          <h4>480</h4>

                        </div>
                      </Col>
                      <Col lg={4} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <p>Total Donatar</p>
                          <h4>200</h4>
                        </div>
                      </Col>
                     
                    </Row>


                    

                  </div>
                </div>
              </Col>

            </Row>
          </Container>
        </section>
      </Layoutdash>
    </>
  )
}

export default Dashboard