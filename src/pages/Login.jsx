import axios from "axios";
import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../component/Layout";
import { Notification } from "../Notifications/Notification";
import { userLoginSaga } from "../store/reducers/authReducer";

export const Login = () => {
  //=============== Globle vaiable ====================//
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //====================Auth Satate====================//
  const {
    isLoading,
    errorMsg,
    isAuthenticated,
    isForgotPasswordSuccess,
    user,
  } = useSelector((state) => state.auth);
  //====================End of code====================//

  //===============End of code====================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [disable, setDisable] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [phoneNumber, setPhoneNumber] = useState();
  const [eyeShow, setEyeShow] = useState(false);

  //===============End of code====================//
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
  const HandleLogin = async () => {
    if (!inputValue.email) {
      setFormError("Please enter valid email");
    } else if (!inputValue.password) {
      setFormError("Please enter your password!");
    } else {
      setDisable(true);
      setFormError("");
      const payload = {
        email: inputValue.email,
        password: inputValue.password,
      };
      try {
        console.log("here");
        dispatch(
          userLoginSaga({
            payload,
            navigate,
            setDisable,
            setModelMessage,
            setOpenModel,
            setRandomVal,
          })
        );
      } catch (err) {
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
                <h2>Sign In</h2>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li className="active">Sign In</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section> */}
        <section className="form-login-sec">
          <Container>
            <div className="outer-box-login">
              <Row>
                <Col lg={6}>
                  <img
                    src="assets/image/maharaja-agrasen.jpg"
                    className="img-fluid left-img-login"
                    alt=""
                  />
                </Col>
                <Col lg={6}>
                  <div className="login-form-box-main">
                    <h2>
                      Hi. welcome to <br /> Agrasen Ji Maharaj Temple, <br />{" "}
                      Indore, Madhya Pradesh
                    </h2>
                    <p>Please Provide Your Valid Credentials</p>

                    <div>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <i className="fas fa-envelope" />
                          </InputGroup.Text>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={HandleData}
                            value={inputValue.email}
                          />
                        </InputGroup>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <i className="fas fa-key" />
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
                      <p>{formError}</p>

                      <p className="pass-line">
                        <Link to="/forgotpass">Forgot Password?</Link>
                      </p>
                      <button
                        className="cmn-btn"
                        disabled={isLoading ? "disabled" : ""}
                        onClick={() => {
                          HandleLogin();
                        }}
                      >
                        {isLoading ? "Please Wait..." : "Submit"}
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
