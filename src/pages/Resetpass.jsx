import React, { useEffect, useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { Notification } from "../Notifications/Notification";
import axiosMain from "../http/axios/axios_main";

export const Resetpass = () => {
  //=============== Globle vaiable ====================//
  const navigate = useNavigate();
  const { state } = useLocation("/forgot-otp");
  const { email } = state || "";
  //===============End of code====================//

  //========================= show password on eye click =========================//
  const [eyeShow, setEyeShow] = useState(false);
  const [eyeShow1, setEyeShow1] = useState(false);
  const seepass = () => {
    const password = document.getElementById("id_pass");
    {
      password.type === "password"
        ? (password.type = "text")
        : (password.type = "password");
    }
  };
  const seepass1 = () => {
    const password1 = document.getElementById("id_pass1");
    {
      password1.type === "password"
        ? (password1.type = "text")
        : (password1.type = "password");
    }
  };

  const showeye = () => {
    const password = document.getElementById("id_pass");
    {
      password.type === "password" ? setEyeShow(true) : setEyeShow(false);
    }
  };
  const showeye1 = () => {
    const password1 = document.getElementById("id_pass1");
    {
      password1.type === "password" ? setEyeShow1(true) : setEyeShow1(false);
    }
  };

  useEffect(() => {
    showeye();
    showeye1();
  }, []);
  //========================= end of code =========================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [disable, setDisable] = useState(false);
  const [inputValue, setInputValue] = useState({
    password: "",
    confirm_password: "",
  });
  //===============End of code====================//

  //===============For PopUp Modal====================//
  const [openModel, setOpenModel] = useState(false);
  const [modelMessage, setModelMessage] = useState("");
  const [randomVal, setRandomVal] = useState("");
  //===============End of code====================//

  //=============== Handle otp function ====================//
  const HandleData = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const HandleEmail = async () => {
    if (!inputValue.password || inputValue.password.length < 6) {
      setFormError("Password must be at least 6 digit");
    } else if (inputValue.password !== inputValue.confirm_password) {
      setFormError("password does not match");
    } else {
      setDisable(true);
      setFormError("");

      try {
        const payload = {
          email: email,
          password: inputValue.password,
        };
        const api = await axiosMain.post("/reset-password", payload);
        if (api.data.status) {
          setDisable(false);
          // setSuccessMsg(
          //   "Your password reset successfully. Please login with new password!"
          // );
          setModelMessage("Your password reset successfully. Please login with new password!");
          setOpenModel(true);
          setRandomVal(Math.floor(Math.random() * 100 + 1));

          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      } catch (error) {
        setDisable(false);
        setModelMessage(error.response.data.message);
        setOpenModel(true);
        setRandomVal(Math.floor(Math.random() * 100 + 1));
        // setFormError(error.response.data.message);
      }
    }
  };
  //===============End of code====================//
  return (
    <>
      <Notification
        message_mo={modelMessage}
        action_mo={openModel}
        random_val={randomVal}
      />
      <Layout>
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
                  <div className="login-form-box-main pt-5">
                    <h2>Reset Password</h2>
                    <p>You Want to Reset Your Password</p>

                    <div className="mt-5">
                      <Form.Group className="mb-3">
                        <Form.Label>Enter New Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <i className="fas fa-key" />
                          </InputGroup.Text>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            id="id_pass"
                            name="password"
                            onChange={HandleData}
                            value={inputValue.password}
                          />
                          <InputGroup.Text
                            onClick={() => {
                              seepass();
                              showeye();
                            }}
                          >
                            {eyeShow ? (
                              <i className="fa fa-eye-slash"></i>
                            ) : (
                              <i className="fa fa-eye"></i>
                            )}
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Confirm New Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <i className="fas fa-key" />
                          </InputGroup.Text>
                          <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            id="id_pass1"
                            name="confirm_password"
                            onChange={HandleData}
                            value={inputValue.confirm_password}
                          />
                          <InputGroup.Text
                            onClick={() => {
                              seepass1();
                              showeye1();
                            }}
                          >
                            {eyeShow1 ? (
                              <i className="fa fa-eye-slash"></i>
                            ) : (
                              <i className="fa fa-eye"></i>
                            )}
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                      <p className="error-msg">{formError}</p>
                      <button
                        className="cmn-btn"
                        disabled={disable}
                        onClick={() => {
                          HandleEmail();
                        }}
                      >
                        {" "}
                        {disable === true ? "Processing" : "Submit"}
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
