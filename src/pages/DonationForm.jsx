import axios from "axios";
import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Layout from "../component/Layout";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Notification } from "../Notifications/Notification";
// import { registerSaga } from "../store/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
// import axiosMain from "../http/axios/axios_main";


export const DonationForm = () => {
  //=============== Globle vaiable ====================//
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //===============End of code====================//

  //======================Auth States=====================//
  const { isLoading, errorMsg, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );
  //====================End of code====================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [disable, setDisable] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    countryCode: "",
    phone: "",
    email: "",
    password: "",
    copassword: "",
    referral: "",
  });
  const [phoneNumber, setPhoneNumber] = useState();

  //===============End of code====================//
  //===================================show eye============================//
  const [eyeShow, setEyeShow] = useState(false);
  const [eyeShow1, setEyeShow1] = useState(false);

  //==================================end of code==========================//
  //===============For PopUp Modal====================//
  const [openModel, setOpenModel] = useState(false);
  const [modelMessage, setModelMessage] = useState("");
  const [randomVal, setRandomVal] = useState("");
  //===============End of code====================//

  //===============Funtion for take Input====================//
  const HandleData = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const HandelPhoneNo = (phone, code) => {
    if (
      typeof phone === "string" &&
      code &&
      typeof code.dialCode === "string"
    ) {
      setInputValue({
        ...inputValue,
        countryCode: code.dialCode,
        phone: phone.slice(code.dialCode.length),
      });
      setFormError("");
    } else {
      setFormError("Invalid phone number format or code");
    }
  };
  //====================End of code===========================//

  //========================= Handle login function =========================//
    const HandleReister = async () => {
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (!inputValue.name) {
        setFormError("Please enter valid user name");
      } else if (!inputValue.password || inputValue.password.length < 6) {
        setFormError("password must be greater than 6 words");
      } else if (!inputValue.phone) {
        setFormError("Please enter your Phone!");
      } else if (inputValue.password !== inputValue.copassword) {
        setFormError("password does not match");
      } else if (!regex.test(inputValue.email)) {
        setFormError("Please enter valid email");
      } else {
        setDisable(true);
        setFormError("");
        const payload = {
          fullName: inputValue.name,
          mobile: inputValue.phone,
          countryCode: inputValue.countryCode,
          email: inputValue.email,
          password: inputValue.password,
          referral_from: inputValue.referral,
        };
        try {
          const Donation = await axiosMain.post(
              "/payment/create-order",
              payload,
              {
                headers: {
                  "Content-Type": "application/json",
                  authorization: `bearer ${user.token}`,
                },
              }
            );
            console.log(Donation,"ddddddd")
        } catch (err) {
          console.log(err);
          setDisable(false);
          setModelMessage(err.response.data.message);
          setOpenModel(true);
          setRandomVal(Math.floor(Math.random() * 100 + 1));
        }
      }
    };
  //========================= end of code =========================//

  return (
    <>
      <Layout>
        <Notification
          message_mo={modelMessage}
          action_mo={openModel}
          random_val={randomVal}
        />
        {/* <section className="login-header-strip">
          <Container>
            <Row>
              <Col>
                <h2>Donation Form</h2>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active">Sign Up</li>
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
                    <h3 className=" text-center">
                      Shri Agrasen tirthdham Online Donation
                    </h3>

                    <h6 className="text-center">
                      We request you to contribute generously and invoke the
                      divine blessings of Lord Shree Agrasen Maharaj on your
                      family.
                      <br /> Join hands with us in the Bhavya Agrasen tirthdham
                      Nirman Seva!
                    </h6>

                    <div>
                      <Row>
                        <Col lg={12}>
                          <br></br>
                          <Form.Group className="mb-3">
                            <Form.Label>1. Payment method</Form.Label>
                            <div>
                              <form action="/action_page.php" className="nationality-sec">
                                <div className="d-flex align-items-center">
                                  <input type="radio" id="html" name="fav_language" value="HTML" />
                                  <label for="html">Online Payment</label>
                                </div>
                                
                              </form>
                            </div>
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <i className="fas fa-user" />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                onChange={HandleData}
                                value={inputValue.name}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <PhoneInput
                              className="input-group"
                              country={"in"}
                              name="phoneNumber"
                              value={phoneNumber}
                              onChange={HandelPhoneNo}
                              placeholder="Phone Number"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      {/* <Row>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <i className="fas fa-lock" />
                              </InputGroup.Text>
                              <Form.Control
                                type={`${eyeShow ? "text" : "password"}`}
                                placeholder="Password"
                                name="password"
                                onChange={HandleData}
                                value={inputValue.password}
                              />
                              <InputGroup.Text
                                onClick={() => {
                                  setEyeShow(!eyeShow);
                                }}
                              >
                                {eyeShow ? (
                                  <i className="fa fa-eye"></i>
                                ) : (
                                  <i className="fa fa-eye-slash"></i>
                                )}
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <i className="fas fa-lock" />
                              </InputGroup.Text>
                              <Form.Control
                                type={`${eyeShow1 ? "text" : "password"}`}
                                placeholder="Confirm Password"
                                name="copassword"
                                onChange={HandleData}
                                value={inputValue.copassword}
                              />
                              <InputGroup.Text
                                onClick={() => {
                                  setEyeShow1(!eyeShow1);
                                }}
                              >
                                {eyeShow1 ? (
                                  <i className="fa fa-eye"></i>
                                ) : (
                                  <i className="fa fa-eye-slash"></i>
                                )}
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row> */}
                      <Row>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <i className="fas fa-envelope" />
                              </InputGroup.Text>
                              <Form.Control
                                type="email"
                                placeholder="Email address"
                                name="email"
                                onChange={HandleData}
                                value={inputValue.email}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="amount"
                            // name="referral"
                            // onChange={HandleData}
                            // value={inputValue.referral}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <i className="fas fa-user" />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="Address"
                              // name="name"
                              // onChange={HandleData}
                              // value={inputValue.name}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <i className="fas fa-user" />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="State"
                              // name="name"
                              // onChange={HandleData}
                              // value={inputValue.name}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <i className="fas fa-user" />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="Country"
                              // name="name"
                              // onChange={HandleData}
                              // value={inputValue.name}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>
                      <p>{formError}</p>
                      {/* <Row>
                        <Col lg={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              type="checkbox"
                              label="I Accept All Terms and Condition"
                            />
                          </Form.Group>
                        </Col>
                      </Row> */}
                      <button
                        className="cmn-btn"
                        disabled={isLoading ? "disabled" : ""}
                      onClick={() => {
                        HandleReister();
                      }}
                      >
                        {isLoading ? "Please Wait..." : "Proceed"}
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
};
