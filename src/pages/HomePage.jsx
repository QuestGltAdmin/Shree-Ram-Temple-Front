import React from 'react'
import Layout from '../component/Layout'
import { Col, Container, Row } from 'react-bootstrap'

const HomePage = () => {
    return (
        <>
            <Layout>
                <div className='banner-sec'>
                    <Container fluid className=' p-0'>
                        <Row className='align-items-center'>
                            <Col md="7">
                                <div className='image'>
                                    <img src="assets/image/Ram-Mandir.jpg" className='img-fluid w-100' alt="mandir" />
                                </div>
                            </Col>
                            <Col md="5">
                                <div className="hero__content text-left">
                                    <h2 className="medium" >Serve the Lord by sharing your contribution to build</h2>
                                    <h2 className="big" >the Bhavya and Divya Agrasen Maharaj Temple</h2>
                                    <a href="/temple-donation" className="cmn-btn">Contribute your bit in this holy initiative.</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='about-section'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col md='4'>
                                <div className='about-img'>
                                    <img src="assets/image/about-us.jpg" className='img-fluid' alt="mandir" />
                                </div>
                            </Col>
                            <Col md="7" className='offset-md-1'>
                                <div className="section-content ">
                                    <h2 className="section-title ">About the Temple</h2>
                                    <p className='para'>Balasore is one of the coastal Districts of Odisha. It lies in the northernmost part of the state. Kamarapal is a Village in the Balasore District.</p>

                                    <p className='para'>Shri Ram temple construction work going on at a distance of 67 km from the Balasore Railway Station and 17 km from Soro Railway Station. The newly under-construction Shri Ram Temple is a wonderful architectural model which will attract a good number of visitors to this site.The building with pink stone will have many side deities on the temple campus. All the rituals are being observed as per the Shri Ram Temple Ayodhya.</p>

                                    <p className='para'>The stone curving and the monumental artifact will draw the attraction of visitors.</p><p></p>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
        </>
    )
}

export default HomePage
