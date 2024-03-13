import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";
import { useNavigate } from "react-router-dom";

export const Donatenow = () => {
  const navigate = useNavigate();

  //===========================Local Variable=================================//
  const [activeIndex, setActiveIndex] = useState(0);
  const [amountvalue, setAmountValue] = useState(501);
  const [activetileIndex, setActiveTileIndex] = useState(0);
  const [amounttilevalue, setAmountTileValue] = useState(6000);
  const [activesquareIndex, setActiveSquareIndex] = useState(0);
  const [amountsquarevalue, setAmountSquareValue] = useState(6000);
  const [otheramount, setOtherAmount] = useState(false);

  //===========================End Of Code=================================//

  const handleAmountChange = (event) => {
    setAmountValue(event.target.value);
  };
  return (
    <>
      <Layout>
        <section className="donation-sec-outer">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="donation-box-outer">
                  <h3 class=" text-center">
                    Shri Agrasen tirthdham Online Donation
                  </h3>

                  <h6 class="text-center">
                    We request you to contribute generously and invoke the
                    divine blessings of Lord Shree Agrasen Maharaj on your
                    family.
                    <br /> Join hands with us in the Bhavya Agrasen tirthdham
                    Nirman Seva!
                  </h6>

                  <Row>
                    <Col lg={6}>
                      <div className="inner-donation-box">
                        <h4>Select Amount for Donation</h4>
                        <h5>
                          Participate in the glorious Shri Agrasen tirthdham
                          donation by donating any amount.
                        </h5>
                        <ul>
                          <li>
                            <button
                              className={activeIndex === 0 ? "active" : ""}
                              onClick={() => {
                                setActiveIndex(0);
                                setAmountValue(501);
                              }}
                            >
                              ₹501
                            </button>
                          </li>
                          <li>
                            <button
                              className={activeIndex === 1 ? "active" : ""}
                              onClick={() => {
                                setActiveIndex(1);
                                setAmountValue(1100);
                              }}
                            >
                              ₹1100
                            </button>
                          </li>
                          <li>
                            <button
                              className={activeIndex === 2 ? "active" : ""}
                              onClick={() => {
                                setActiveIndex(2);
                                setAmountValue(2100);
                              }}
                            >
                              ₹2100
                            </button>
                          </li>
                          <li>
                            <button
                              className={activeIndex === 3 ? "active" : ""}
                              onClick={() => {
                                setActiveIndex(3);
                                setAmountValue(5100);
                              }}
                            >
                              ₹5100
                            </button>
                          </li>
                          <li>
                            <button
                              className={activeIndex === 4 ? "active" : ""}
                              onClick={() => {
                                setActiveIndex(4);
                                setAmountValue(11000);
                              }}
                            >
                              ₹11000
                            </button>
                          </li>
                          <li>
                            <button
                              className={activeIndex === 5 ? "active" : ""}
                              onClick={() => {
                                setActiveIndex(5);
                                setAmountValue(31000);
                              }}
                            >
                              ₹31000
                            </button>
                          </li>
                          <li>
                            <button
                              className={activeIndex === 6 ? "active" : ""}
                              onClick={() => {
                                setActiveIndex(6);
                                setAmountValue(51000);
                              }}
                            >
                              ₹51000
                            </button>
                          </li>
                          <li>
                            <button
                              className={activeIndex === 7 ? "active" : ""}
                              onClick={() => {
                                setActiveIndex(7);
                                setAmountValue(71000);
                              }}
                            >
                              ₹71000
                            </button>
                          </li>
                          <li>
                            <button
                              className={activeIndex === 8 ? "active" : ""}
                              onClick={() => {
                                setActiveIndex(8);
                                setAmountValue(111000);
                              }}
                            >
                              ₹111000
                            </button>
                          </li>
                          <li>
                            <button
                              className={activeIndex === 9 ? "active" : ""}
                              onClick={() => {
                                setActiveIndex(9);
                                setAmountValue(0);
                                setOtherAmount(true);
                              }}
                            >
                              other Amount
                            </button>
                          </li>
                        </ul>
                        <div>
                          {otheramount ? (
                            <Form.Control
                              type="text"
                              placeholder="Enter Amount"
                              onChange={handleAmountChange}
                            />
                          ) : (
                            ""
                          )}
                          <button
                            className="cmn-btn"
                            onClick={() => {
                              navigate("/new-donation-form", {
                                state: { amount: amountvalue },
                              });
                            }}
                          >
                            Donate Now
                          </button>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="inner-donation-box">
                        <h4>Tiles Donation</h4>
                        <h5>
                          Participate in the glorious Mandir Nirman Seva by
                          donating tiles and receive the special blessings of
                          the Lord Agrasen Maharaja.
                        </h5>
                        <ul>
                          <li>
                            <button
                              className={activetileIndex === 0 ? "active" : ""}
                              onClick={() => {
                                setActiveTileIndex(0);
                                setAmountTileValue(6000);
                              }}
                            >
                              ₹6000 <span>For 1 Tile</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={activetileIndex === 1 ? "active" : ""}
                              onClick={() => {
                                setActiveTileIndex(1);
                                setAmountTileValue(12000);
                              }}
                            >
                              ₹12000 <span>For 2 Tile</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={activetileIndex === 2 ? "active" : ""}
                              onClick={() => {
                                setActiveTileIndex(2);
                                setAmountTileValue(18000);
                              }}
                            >
                              ₹18000 <span>For 3 Tile</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={activetileIndex === 3 ? "active" : ""}
                              onClick={() => {
                                setActiveTileIndex(3);
                                setAmountTileValue(24000);
                              }}
                            >
                              ₹24000 <span>For 4 Tile</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={activetileIndex === 4 ? "active" : ""}
                              onClick={() => {
                                setActiveTileIndex(4);
                                setAmountTileValue(30000);
                              }}
                            >
                              ₹30000 <span>For 5 Tile</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={activetileIndex === 5 ? "active" : ""}
                              onClick={() => {
                                setActiveTileIndex(5);
                                setAmountTileValue(36000);
                              }}
                            >
                              ₹36000 <span>For 6 Tile</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={activetileIndex === 6 ? "active" : ""}
                              onClick={() => {
                                setActiveTileIndex(6);
                                setAmountTileValue(72000);
                              }}
                            >
                              ₹72000 <span>For 12 Tile</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={activetileIndex === 7 ? "active" : ""}
                              onClick={() => {
                                setActiveTileIndex(7);
                                setAmountTileValue(120000);
                              }}
                            >
                              ₹120000 <span>For 20 Tile</span>
                            </button>
                          </li>
                        </ul>
                        <div>
                          <button
                            className="cmn-btn"
                            onClick={() => {
                              navigate("/new-donation-form", {
                                state: { amount: amounttilevalue },
                              });
                            }}
                          >
                            Donate Now
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <div className="inner-donation-box green-box">
                        <h4>
                          Every Square Foot Count <br />{" "}
                          <span>
                            Donate per square feet space for temple construction
                          </span>
                        </h4>
                        <h5>
                          Participate in the Bhavya Shree Agrasen tirthdham
                          Nirman Seva by donating a square foot and receive the
                          special blessings of the Lord Agrasen Maharaja. Also
                          Get your name inscribed on Sabri Wall in the temple
                        </h5>
                        <ul>
                          <li>
                            <button
                              className={
                                activesquareIndex === 0 ? "active" : ""
                              }
                              onClick={() => {
                                setActiveSquareIndex(0);
                                setAmountSquareValue(6000);
                              }}
                            >
                              ₹6,000/- <span>For 1 Sq. Feet</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={
                                activesquareIndex === 1 ? "active" : ""
                              }
                              onClick={() => {
                                setActiveSquareIndex(1);
                                setAmountSquareValue(12000);
                              }}
                            >
                              ₹12,000/- <span>For 2 Sq. Feet</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={
                                activesquareIndex === 2 ? "active" : ""
                              }
                              onClick={() => {
                                setActiveSquareIndex(2);
                                setAmountSquareValue(18000);
                              }}
                            >
                              ₹18,000/- <span>For 3 Sq. Feet</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={
                                activesquareIndex === 3 ? "active" : ""
                              }
                              onClick={() => {
                                setActiveSquareIndex(3);
                                setAmountSquareValue(30000);
                              }}
                            >
                              ₹30,000/- <span>For 5 Sq. Feet</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={
                                activesquareIndex === 4 ? "active" : ""
                              }
                              onClick={() => {
                                setActiveSquareIndex(4);
                                setAmountSquareValue(60000);
                              }}
                            >
                              ₹60,000/- <span>For 10 Sq. Feet</span>
                            </button>
                          </li>
                          <li>
                            {" "}
                            <button
                              className={
                                activesquareIndex === 5 ? "active" : ""
                              }
                              onClick={() => {
                                setActiveSquareIndex(5);
                                setAmountSquareValue(120000);
                              }}
                            >
                              ₹1,20,000/- <span>For 20 Sq. Feet</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={
                                activesquareIndex === 6 ? "active" : ""
                              }
                              onClick={() => {
                                setActiveSquareIndex(6);
                                setAmountSquareValue(300000);
                              }}
                            >
                              ₹3,00,000/- <span>For 50 Sq. Feet</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={
                                activesquareIndex === 7 ? "active" : ""
                              }
                              onClick={() => {
                                setActiveSquareIndex(7);
                                setAmountSquareValue(600000);
                              }}
                            >
                              ₹6,00,000/- <span>For 100 Sq. Feet</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={
                                activesquareIndex === 8 ? "active" : ""
                              }
                              onClick={() => {
                                setActiveSquareIndex(8);
                                setAmountSquareValue(3000000);
                              }}
                            >
                              ₹30,00,000/- <span>For 500 Sq. Feet</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className={
                                activesquareIndex === 9 ? "active" : ""
                              }
                              onClick={() => {
                                setActiveSquareIndex(9);
                                setAmountSquareValue(6000000);
                              }}
                            >
                              ₹60,00,000/- <span>For 1000 Sq. Feet</span>
                            </button>
                          </li>
                        </ul>
                        <div>
                          <button
                            className="cmn-btn"
                            onClick={() => {
                              navigate("/new-donation-form", {
                                state: { amount: amountsquarevalue },
                              });
                            }}
                          >
                            Donate Now
                          </button>
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
  );
};
