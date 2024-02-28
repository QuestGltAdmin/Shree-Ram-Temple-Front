import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import axiosMain from "../http/axios/axios_main";
import OTPInput from "otp-input-react";
import { Notification } from "../Notifications/Notification";

export const SignUpOtp = () => {
  //=============== Globle vaiable ====================//
  const navigate = useNavigate();
  const { state } = useLocation("/forgotpass");
  const { email } = state || "";
  //===============End of code====================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [otp, setOTP] = useState("");
  const [disable, setDisable] = useState(false);
  //===============End of code====================//

  //===============For PopUp Modal====================//
  const [openModel, setOpenModel] = useState(false);
  const [modelMessage, setModelMessage] = useState("");
  const [randomVal, setRandomVal] = useState("");
  //===============End of code====================//

  //=============== Handle otp function ====================//
  const HandleOtp = async () => {
    if (otp?.length !== 6) {
      setFormError("Please enter valid otp!");
    } else if (!email) {
      setFormError("Email not found!");
    } else {
      setDisable(true);
      setFormError("");

      try {
        const payload = {
          email: email,
          otp: otp,
          type: "signup",
        };

        const api = await axiosMain.post("/verify-otp", payload);

        if (api.data.status) {
          setDisable(false);
          // setSuccessMsg("Otp verify successfully. Please reset you password!");
          setModelMessage(
            "Otp verify successfully. Please login."
          );
          setOpenModel(true);
          setRandomVal(Math.floor(Math.random() * 100 + 1));
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      } catch (error) {
        setDisable(false);
        // setFormError(error.response.data.message);
        setModelMessage(error.response.data.message);
        setOpenModel(true);
        setRandomVal(Math.floor(Math.random() * 100 + 1));
      }
    }
  };
  //===============End of code====================//

  //===============End of code====================//
  const HandleReSend = async () => {

    const payload = {
      email: email,
      type: "signup",
    };
    try {
      const resend = await axiosMain.post("/resend-otp", payload);
      if (resend?.data?.status) {
        // setSuccessMsg("Otp resend successfully");
        setModelMessage("Otp resend successfully");
        setOpenModel(true);
        setRandomVal(Math.floor(Math.random() * 100 + 1));
      }
    } catch (error) {
      // setFormError(error.response.data.message);
      setModelMessage(error.response.data.message);
      setOpenModel(true);
      setRandomVal(Math.floor(Math.random() * 100 + 1));
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
                    <h2>One Time Password</h2>
                    <p>Please Enter OTP</p>

                    <div className="mt-5">
                      <Form.Group className="mb-3">
                        <Form.Label>Enter OTP</Form.Label>
                        <OTPInput
                          value={otp}
                          onChange={setOTP}
                          autoFocus
                          className="otp_box"
                          OTPLength={6}
                          otpType="number"
                          disabled={false}
                          //   secure
                          name="otp"
                        />
                      </Form.Group>
                      <p className="error-msg">{formError}</p>
                      <button
                        className="cmn-btn"
                        onClick={() => {
                          HandleOtp();
                        }}
                        disabled={disable}
                      >
                        {" "}
                        {disable == true ? "Processing" : "Submit"}
                      </button>
                      <p className="forgot-link cursorPointerClass">
                        <a
                          onClick={() => {
                            HandleReSend();
                          }}
                        >
                          Resend OTP
                        </a>
                      </p>
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
