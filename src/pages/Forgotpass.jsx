import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";
import { useNavigate } from "react-router-dom";
import axiosMain from "../http/axios/axios_main";
import { Notification } from "../Notifications/Notification";

export const Forgotpass = () => {
  //=============== Globle vaiable ====================//
  const navigate = useNavigate();
  //===============End of code====================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [disable, setDisable] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
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
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!regex.test(inputValue.email)) {
      setFormError("Please enter valid email!");
    } else {
      setDisable(true);
      setFormError("");

      try {
        // const RowEmail = await encryptData(inputValue.email)
        const payload = {
          email: inputValue.email,
        };

        const api = await axiosMain.post("/forgot-password", payload);

        if (api.data.status) {
          setDisable(false);
          // setSuccessMsg("Please verify your otp sent on you mail!")
          setModelMessage("Please verify your otp sent on you mail!");
          setOpenModel(true);
          setRandomVal(Math.floor(Math.random() * 100 + 1));
          setTimeout(() => {
            navigate("/forgot-otp", { state: { email: inputValue.email } });
          }, 3000);
        }
      } catch (error) {
        setDisable(false);
        console.log(error);
        // setFormError(error.response.data.message)
        setModelMessage(error.response.data);
        setOpenModel(true);
        setRandomVal(Math.floor(Math.random() * 100 + 1));
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
                    <h2>Forgot Password</h2>
                    <p>Please Provide Your Email Address</p>

                    <div className="mt-5">
                      <Form.Group className="mb-3">
                        <Form.Label>Enter Your Email</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <i className="fas fa-envelope" />
                          </InputGroup.Text>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={HandleData}
                            value={inputValue.email}
                          />
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
