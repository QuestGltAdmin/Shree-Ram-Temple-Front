import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Layoutdash from "../../component/Layoutdash";
import axiosMain from "../../http/axios/axios_main";

const Profile = () => {
  var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  //=============== Globle vaiable ====================//
  const navigate = useNavigate();

  //===============End of code====================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [disable, setDisable] = useState(false);
  const [inputValue, setInputValue] = useState({
    oldPassword: "",
    Newpassword: "",
    CoNewpassword: "",
  });
  const [token, setToke] = useState();
  //===============End of code====================//

  //================== useEffect to get Token =========================//
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToke(storedToken);
  }, []);
  //=======================End of code===============================//

  //===============Funtion for take Input====================//
  const HandleData = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  //====================End of code===========================//

  //====================Change Password Function====================//
  const ChangePassword = async () => {
    setDisable(true);
    try {
      if (
        inputValue.oldPassword === "" ||
        inputValue.Newpassword === "" ||
        inputValue.CoNewpassword === ""
      ) {
        setDisable(false);

        setFormError("Please Fill All values");
        return;
      }
      if (inputValue.Newpassword !== inputValue.CoNewpassword) {
        setDisable(false);

        setFormError("Password & Confirm Password is not Match");
        return;
      }
      const url = "/users/change_password";
      const payload = {
        old_password: inputValue.oldPassword,
        new_password: inputValue.Newpassword,
      };
      console.log(payload);
      const res = await axiosMain.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
      });
      console.log(res);
      if (res.status === 200) {
        setDisable(false);

        setFormError(res.data.message);
      } else {
        setDisable(false);

        setFormError(res.message);
      }
    } catch (error) {
      setDisable(false);

      console.log(error);
      setFormError(error.response.data.message);
    }
  };
  //====================End of code====================//
  //===================================show eye============================//
  const [eyeShow, setEyeShow] = useState(false);
  const [eyeShow1, setEyeShow1] = useState(false);
  const [eyeShow2, setEyeShow2] = useState(false);

  //==================================end of code==========================//
  return (
    <>
      <Layoutdash>
        <section className="outer-dash-section">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading">Account Info</h2>
                    <div className="inner-dash-form shadow-box-main">
                      <Row>
                        <Col lg={4}>
                          <div class="profile-pic">
                            <label class="-label" for="file">
                              <span class="glyphicon glyphicon-camera"></span>
                              <span>Change Image</span>
                            </label>
                            <input
                              id="file"
                              type="file"
                              onchange="loadFile(event)"
                            />
                            <img
                              src="/assets/image/maharaja-agrasen.jpg"
                              id="output"
                              width="200"
                            />
                          </div>
                        </Col>
                        <Col lg={8}>
                          <Row>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="Full Name"
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="Phone No."
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="Father's Name"
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="email"
                                  placeholder="Email Address(Optional)"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="Your Business"
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="Blood Group"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={12}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  as="textarea"
                                  rows={2}
                                  placeholder="Your Address"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <div>
                            <button className="common-btn  m-0">Submit</button>
                          </div>
                        </Col>
                      </Row>

                      <h2 className="inner-page-heading mt-5">
                        Change Password
                      </h2>

                      <Row>
                        <Col lg={4}>
                          <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                              <Form.Control
                                placeholder="Current Password"
                                type={`${eyeShow ? "text" : "password"}`}
                                name="oldPassword"
                                onChange={HandleData}
                                value={inputValue.oldPassword}
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
                        <Col lg={4}>
                          <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                              <Form.Control
                                placeholder="New Password"
                                type={`${eyeShow1 ? "text" : "password"}`}
                                name="Newpassword"
                                onChange={HandleData}
                                value={inputValue.Newpassword}
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
                        <Col lg={4}>
                          <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                              <Form.Control
                                placeholder="Confirm Password"
                                type={`${eyeShow2 ? "text" : "password"}`}
                                name="CoNewpassword"
                                onChange={HandleData}
                                value={inputValue.CoNewpassword}
                              />
                              <InputGroup.Text
                                onClick={() => {
                                  setEyeShow2(!eyeShow2);
                                }}
                              >
                                {eyeShow2 ? (
                                  <i className="fa fa-eye"></i>
                                ) : (
                                  <i className="fa fa-eye-slash"></i>
                                )}
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>
                      <p>{formError}</p>

                      <div>
                        <button
                          className="common-btn m-0"
                          disabled={disable}
                          onClick={() => {
                            ChangePassword();
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layoutdash>
    </>
  );
};

export default Profile;
