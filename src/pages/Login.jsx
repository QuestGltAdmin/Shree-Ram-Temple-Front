import axios from "axios";
import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Layout from "../component/Layout";
import { Notification } from "../Notifications/Notification";

export const Login = () => {
  //=============== Globle vaiable ====================//
  const navigate = useNavigate();

  //===============End of code====================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [disable, setDisable] = useState(false);
  const [inputValue, setInputValue] = useState({
    phone: "",
    password: "",
  });
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
  //====================End of code===========================//

  //========================= Handle login function =========================//
  const HandleLogin = async () => {
    if (!inputValue.phone) {
      setFormError("Please enter valid phone or user name");
    } else if (!inputValue.password) {
      setFormError("Please enter your password!");
    } else {
      setDisable(true);
      setFormError("");
      const payload = {
        mobile: inputValue.phone,
        password: inputValue.password,
      };
      try {
        const loginData = await axios.post(
          "https://blockspace.donative.in:3009/login",
          payload
        );
        if (loginData.status === 200) {
          localStorage.setItem("token", loginData.data.token);
          localStorage.setItem("isUserAuthenticated", true);
          setDisable(false);
          setModelMessage("Login successful");
      setOpenModel(true);
      setRandomVal(Math.floor(Math.random() * 100 + 1));
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        }
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
        <section className="login-header-strip">
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
        </section>
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
                        <Form.Label>Phone Number</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <i className="fas fa-phone" />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Phone Number"
                            name="phone"
                            onChange={HandleData}
                            value={inputValue.phone}
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
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={HandleData}
                            value={inputValue.password}
                          />
                        </InputGroup>
                      </Form.Group>
                      <p>{formError}</p>

                      <p className="pass-line">
                        <a href="">Forgot Password?</a>
                      </p>
                      <button
                        className="cmn-btn"
                        disabled={disable}
                        onClick={() => {
                          HandleLogin();
                        }}
                      >
                        Submit
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
