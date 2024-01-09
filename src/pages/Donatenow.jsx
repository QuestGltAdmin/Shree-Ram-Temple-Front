import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Layout from '../component/Layout'

export const Donatenow = () => {
  return (
    <>
    <Layout>
    <section className="donation-sec-outer">
         <Container>
           <Row>
               <Col lg={12}>
                  <div className="donation-box-outer">
                     <h3 class=" text-center" >Shri Agrasen tirthdham Online Donation</h3>
                    
                    <h6 class="text-center">We request you to contribute generously and invoke the divine blessings of Lord Shree Agrasen Maharaj on your family.<br/> Join hands with us in the Bhavya Agrasen tirthdham Nirman Seva!</h6>

                    <Row>
                       <Col lg={6}>
                          <div className="inner-donation-box">
                              <h4>Select Amount for Donation</h4>
                              <h5>Participate in the glorious Shri Agrasen tirthdham donation by donating any amount.</h5>
                              <ul>
                                 <li><button className="active">₹501</button></li>
                                 <li><button>₹1100</button></li>
                                 <li><button>₹2100</button></li>
                                 <li><button>₹5100</button></li>
                                 <li><button>₹11000</button></li>
                                 <li><button>₹31000</button></li>
                                 <li><button>₹51000</button></li>
                                 <li><button>₹71000</button></li>
                                 <li><button>₹111000</button></li>
                                 <li><button>other Amount</button></li>
                              </ul>
                              <div>
                                  <Form.Control type="text" placeholder="Enter Amount" />
                                  <button className="cmn-btn">Donate Now</button>
                              </div>
                          </div>
                       </Col>
                       <Col lg={6}>
                          <div className="inner-donation-box">
                              <h4>Tiles Donation</h4>
                              <h5>Participate in the glorious Mandir Nirman Seva by donating tiles and receive the special blessings of the Lord Agrasen Maharaja.</h5>
                              <ul>
                                 <li><button className="active">₹6000 <span>For 1 Tile</span></button></li>
                                 <li><button>₹12000 <span>For 2 Tile</span></button></li>
                                 <li><button>₹18000 <span>For 3 Tile</span></button></li>
                                 <li><button>₹24000 <span>For 4 Tile</span></button></li>
                                 <li><button>₹30000 <span>For 5 Tile</span></button></li>
                                 <li><button>₹36000 <span>For 6 Tile</span></button></li>
                                 <li><button>₹72000 <span>For 12 Tile</span></button></li>
                                 <li><button>₹120000 <span>For 20 Tile</span></button></li>
                              </ul>
                              <div>
                                  
                                  <button className="cmn-btn">Donate Now</button>
                              </div>
                          </div>
                       </Col>
                    </Row>

                    <Row>
                       <Col lg={12}>
                          <div className="inner-donation-box green-box">
                              <h4>Every Square Foot Count <br/> <span>Donate per square feet space for temple construction</span></h4>
                              <h5>Participate in the Bhavya Shree Agrasen tirthdham Nirman Seva by donating a square foot and receive the special blessings of the Lord Agrasen Maharaja. Also Get your name inscribed on Sabri Wall in the temple</h5>
                              <ul>
                                 <li><button className="active">₹6,000/- <span>For 1 Sq. Feet</span></button></li>
                                 <li><button>₹12,000/- <span>For 2 Sq. Feet</span></button></li>
                                 <li><button>₹18,000/- <span>For 3 Sq. Feet</span></button></li>
                                 <li><button>₹30,000/- <span>For 5 Sq. Feet</span></button></li>
                                 <li><button>₹60,000/- <span>For 10 Sq. Feet</span></button></li>
                                 <li><button>₹1,20,000/- <span>For 20 Sq. Feet</span></button></li>
                                 <li><button>₹3,00,000/- <span>For 50 Sq. Feet</span></button></li>
                                 <li><button>₹6,00,000/- <span>For 100 Sq. Feet</span></button></li>
                                 <li><button>₹30,00,000/- <span>For 500 Sq. Feet</span></button></li>
                                 <li><button>₹60,00,000/- <span>For 1000 Sq. Feet</span></button></li>
                              </ul>
                              <div>
                                  
                                  <button className="cmn-btn">Donate Now</button>
                              </div>
                          </div>
                       </Col>
                    </Row>



                  </div>
               </Col>
            </Row>
        </Container>
    </section>
      </Layout>
      
    </>
  )
}
