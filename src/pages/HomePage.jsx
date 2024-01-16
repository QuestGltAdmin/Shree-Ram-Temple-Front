import React from "react";
import Layout from "../component/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="banner-sec">
          <Container fluid className=" p-0">
            <Row className="align-items-center">
              <Col lg="7">
                <div className="image">
                  <img
                    src="assets/image/Ram-Mandir.jpg"
                    className="img-fluid w-100"
                    alt="mandir"
                  />
                </div>
              </Col>
              <Col lg="5">
                <div className="hero__content text-left">
                  <h2 className="medium">
                    Serve the Lord by sharing your contribution to build
                  </h2>
                  <h2 className="big">
                    the Bhavya and Divya Agrasen Maharaja Temple
                  </h2>
                  <a href="" className="cmn-btn">
                    Contribute your bit in this holy initiative.
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="about-section">
          <Container>
            <Row className="align-items-center">
              <Col md="4">
                <div className="about-img">
                  <img
                    src="assets/image/about-us.jpg"
                    className="img-fluid"
                    alt="mandir"
                  />
                </div>
              </Col>
              <Col md="7" className="offset-md-1">
                <div className="section-content ">
                  <h2 className="section-title ">About the Temple</h2>
                  <p className="para">
                    The All India Agrawal Conference was established in 1975
                    with the aim of spreading the glorious history of Maharaja
                    Agrasen all over the world and setting up an organization of
                    all the foremen.
                  </p>

                  <p className="para">
                    In order to provide education, health and employment to the
                    weaker sections of the society, the Agrasen Foundation has
                    been set up by the conference under which a plan is made to
                    collect a sum of Rs 500 crores from the society and form a
                    huge fund, so that the education of orphans , Higher
                    education of deserving poor children, help and people unable
                    to get treatment for serious diseases like cancer, kidney,
                    heart, brain tumor Agroha has set a goal to develop as
                    Shakti.{" "}
                  </p>

                  {/* <p className='para'>The stone curving and the monumental artifact will draw the attraction of visitors.</p><p></p> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="construction-sec">
          <Container>
            <Row>
              <div className="section-header text-center">
                <h3 className="text-white">Donate to Build the Temple. </h3>
                <h2 className="section-title text-white">
                  Temple Construction &amp; Maintenance
                </h2>
              </div>
              <Col lg="3" md="6">
                <div className="item">
                  <img
                    src="assets/image/stone.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="info">
                    <h4>Donate 1 Sqft Pink Stone</h4>
                    <p className="para">
                      Donate 1 square foot of pink stone for construction
                    </p>
                    <h4>₹ 6500</h4>
                    <Link to={"/donate-now"} className="cmn-btn">
                      Donate Now
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="item">
                  <img
                    src="assets/image/saria.png"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="info">
                    <h4>Donate 100kg TMT Saria</h4>
                    <p className="para">
                      TMT Saria donated by you will be a part of the temple
                      forever
                    </p>
                    <h4>₹ 5100</h4>
                    <Link to={"/donate-now"} className="cmn-btn">
                      Donate Now
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="item">
                  <img
                    src="assets/image/cement.png"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="info">
                    <h4>Donate 11 Bags Of Cement</h4>
                    <p className="para">
                      Cement Bag donated by you will be a part of the temple
                      forever
                    </p>
                    <h4>₹ 4400</h4>
                    <Link to={"/donate-now"} className="cmn-btn">
                      Donate Now
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="item">
                  <img
                    src="assets/image/cement2.png"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="info">
                    <h4>Donate 4 Bags Of Cement</h4>
                    <p className="para">
                      Cement Bag donated by you will be a part of the temple
                      forever
                    </p>
                    <h4>₹ 1600</h4>
                    <Link to={"/donate-now"} className="cmn-btn">
                      Donate Now
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="item">
                  <img
                    src="assets/image/brick1.png"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="info">
                    <h4>Donate 300 Bricks</h4>
                    <p className="para">
                      Brick donated by you will be a part of the temple forever
                    </p>
                    <h4>₹ 2100</h4>
                    <Link to={"/donate-now"} className="cmn-btn">
                      Donate Now
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="item">
                  <img
                    src="assets/image/brick2.png"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="info">
                    <h4>Donate 150 Bricks</h4>
                    <p className="para">
                      Brick donated by you will be a part of the temple forever
                    </p>
                    <h4>₹ 1151</h4>
                    <Link to={"/donate-now"} className="cmn-btn">
                      Donate Now
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="item">
                  <img
                    src="assets/image/brick3.png"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="info">
                    <h4>Donate 100 Bricks</h4>
                    <p className="para">
                      Brick donated by you will be a part of the temple forever
                    </p>
                    <h4>₹ 751</h4>
                    <Link to={"/donate-now"} className="cmn-btn">
                      Donate Now
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="item">
                  <img
                    src="assets/image/soil.png"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="info">
                    <h4>Donate 20 CFT Sand</h4>
                    <p className="para">
                      Sand donated by you will be a part of the temple forever
                    </p>
                    <h4>₹ 1551</h4>
                    <Link to={"/donate-now"} className="cmn-btn">
                      Donate Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="stay-us-area">
          <Container>
            <Row>
              <div className="section-header text-center">
                <h2 className="section-title text-black">
                  How Can You Get Involved?
                </h2>
                <h3 className="text-black">
                  Offer your seva and receive Shree Agrasen Maharaja blessings!
                </h3>
              </div>
            </Row>
            <Row>
              <Col lg="4" md="6">
                <div className="single-item">
                  <div className="item">
                    <i className="flaticon-fast-food">
                      {" "}
                      <i className="fas fa-handshake" />
                    </i>
                    <h4 className=" section-title">
                      <a href="">Become a Volunteer</a>
                    </h4>
                    <p className="para">Volunteering Opportunities</p>
                    <a href="">
                      <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6">
                <div className="single-item orange">
                  <div className="item">
                    <i className="flaticon-fast-food">
                      {" "}
                      <img
                        src="assets/image/temple.png"
                        className="img-fluid"
                        alt=""
                      />
                    </i>
                    <h4 className="section-title">
                      <a href="">Donate for Temple Construction</a>
                    </h4>
                    <p className="para">
                      Building the Temple means love toward Agrasen Maharaja.
                    </p>
                    <a href="">
                      <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6">
                <div className="single-item">
                  <div className="item">
                    <i className="flaticon-fast-food">
                      {" "}
                      <i className="fas fa-certificate" />
                    </i>
                    <h4 className="section-title">
                      <a href="">Membership Program</a>
                    </h4>
                    <p className="para">
                      Become a member of the Shri Agrasen Maharaja Temple
                      Kamarpal and help us to support our mission.
                    </p>
                    <a href="">
                      <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="united-sec">
          <Container>
            <Row>
              <Col md="12">
                <div className="united-box row">
                  <div className="col-lg-10 text-center set-content">
                    <h2 className="text-white section-title">
                      Let's get united to build the Bhavya and Divya temple in
                      Indore, Madhya Pradesh
                    </h2>
                    <p className="para text-white">
                      Serve the God by sharing your contribution.
                    </p>
                    <a href="" className="cmn-btn mt-50">
                      Contribute Now!
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
