import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layoutdash from "../../component/Layoutdash";
import useAuth from "../../hooks/useAuth";
import axiosMain from "../../http/axios/axios_main";
import { Notification } from "../../Notifications/Notification";
import { saveprofiledata } from "../../store/reducers/authReducer";

const Profile = () => {
  var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  //=============== Globle vaiable ====================//
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, proupdatedata,  proupdate, } = useAuth();

  //===============End of code====================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [disable, setDisable] = useState(false);
  const [profileData, setProfileData] = useState();
  const [inputValue, setInputValue] = useState({
    oldPassword: "",
    Newpassword: "",
    CoNewpassword: "",
    
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
          authorization: `bearer ${user.token}`,
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


  //========================Functions======================//
  //Function to get Profile
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    try {
      const url = "/users/get_user_detail";
      const res = await axiosMain.get(url, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${user.token}`,
        },
      });
      console.log(res, "profile response");
      setProfileData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("apidata", profileData);

  //======================Local States=====================//

  const [formData, setFormData] = useState({
    fullName: proupdate.fullName || user.fullName || "",
    fatherName: proupdate.fatherName|| user.fatherName || "",
    email: proupdate.email|| user.email || "",
    businessName: proupdate.businessName|| user.businessName || "",
    bloodGroup: proupdate.bloodGroup|| user.bloodGroup || "",
    address: proupdate.address|| user.address || "",
    file: "",
    user_id: user._id,
    photoUrl: proupdate ? proupdate.profile : user.profile || "",
    mobile: proupdate.mobile || user.mobile || "",
    countryCode:
      proupdate.countryCode || user.countryCode || data.countryCode || "",
  });
  const [imageData, setImageData] = useState({
    file: "",
    photoUrl: "",
  });
  const { name, file, photoUrl, phone, countryCode } = imageData;

  let newdata = new FormData();
  const formdata = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
    setInputdata({ ...inputdata, [name]: value });

  };

  const photoUploadHandler = (event, setState) => {
    const { files } = event.target;
    if (files[0]) {
      if (files[0].type.includes("image")) {
        const filename = files[0].name;
        const fileExtension = filename.substr(filename.lastIndexOf(".") + 1);
        if (
          fileExtension.toLowerCase() === "png" ||
          fileExtension.toLowerCase() === "jpg" ||
          fileExtension.toLowerCase() === "gif" ||
          fileExtension.toLowerCase() === "jpeg"
        ) {
          setState({
            ...formData,
            file: event.currentTarget.files[0],
            photoUrl: URL.createObjectURL(files[0]),
          });
        }
      } else {
        setModelMessage("Upload image only");
        setOpenModel(true);
        setTimeout(() => {
          setRandomVal(Math.floor(Math.random() * 100 + 1));
        }, 500);
      }
    }
  };
  const ImageHandler = () => {
    setImageData({
      file: "",
      photoUrl: "",
    });
    // setModelMessage("Upload valid image only");
    // setOpenModel(true);
    // setTimeout(() => {
    //   setRandomVal(Math.floor(Math.random() * 100 + 1));
    // }, 500);
  };

  const UpdateProfile = async () => {
    
      setFormError("");
      try {
       

        newdata.append("fullName", formData.fullName);
        newdata.append("mobile", formData.mobile);
        newdata.append("email", formData.email);
        newdata.append("address", formData.address);
        newdata.append("businessName", formData.businessName);
        newdata.append("bloodGroup", formData.bloodGroup);
        newdata.append("fatherName", formData.fatherName);
        newdata.append("profile", file || formData.photoUrl || "");
        newdata.append("countryCode", formData.countryCode);
        const api = await axiosMain.post("/users/update_user_profile", newdata, {
          headers: {
            "content-type": "multipart/form-data",
            authorization: `bearer ${user.token}`,
          },
        });
        console.log(api.data.data);

        if (api.status === 200) {
        

          dispatch(saveprofiledata(api.data.data));
          localStorage.setItem(
            "saveprodata",
            JSON.stringify(api.data.data)
          );

          setModelMessage(api.data.message);
          setOpenModel(true);
          setTimeout(() => {
            setRandomVal(Math.floor(Math.random() * 100 + 1));
          }, 500);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      } catch (error) {
       

        console.log(error);
        setModelMessage(error.response.data.message);
        setOpenModel(true);
        setTimeout(() => {
          setRandomVal(Math.floor(Math.random() * 100 + 1));
        }, 500);
      }
    
  };
  return (
    <>
      <Layoutdash>
      <Notification
          message_mo={modelMessage}
          action_mo={openModel}
          random_val={randomVal}
        />
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
                              onChange={(e) =>
                                photoUploadHandler(
                                  e,
                                  setImageData
                                )
                              }
                              ondragover="drag()"
                              ondrop="drop()"
                            />
                            {proupdate.profile === null 
                           ? (
                            <img
                              onError={() => {
                                ImageHandler();
                              }}
                              src={ photoUrl ||"/assets/image/maharaja-agrasen.jpg"}
                              id="output"
                              width="200"
                              onChange={(e) =>
                                photoUploadHandler(
                                  e,
                                  setImageData
                                )
                              }
                              ondragover="drag()"
                              ondrop="drop()"
                            />
                            ) : (
                              <img
                                onError={() => {
                                  ImageHandler();
                                }}
                                src={
                                  photoUrl ||
                                  formData.photoUrl ||
                                  proupdate.profile ||
                                  "/assets/image/maharaja-agrasen.jpg"
                                }
                                alt=""
                                onChange={(e) =>
                                  photoUploadHandler(
                                    e,
                                    setImageData
                                  )
                                }
                                ondragover="drag()"
                                ondrop="drop()"
                              />
                            )}
                          </div>
                          
                        </Col>
                        <Col lg={8}>
                          <Row>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="Full Name"
        
                                  onChange={formdata}
                                              name="fullName"
                                              value={formData.fullName}
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="Phone No."
                                  disabled
                                              name="mobile"
                                              value={formData.mobile}
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
                                  onChange={formdata}
                                              name="fatherName"
                                              value={formData.fatherName}
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="email"
                                  placeholder="Email Address(Optional)"
                                  onChange={formdata}
                                              name="email"
                                              value={formData.email}
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
                                  onChange={formdata}
                                  name="businessName"
                                  value={formData.businessName}
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="Blood Group"
                                  onChange={formdata}
                                  name="bloodGroup"
                                  value={formData.bloodGroup}
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
                                  onChange={formdata}
                                  name="address"
                                  value={formData.address}
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <div>
                            <button className="common-btn  m-0"  onClick={UpdateProfile}>Submit</button>
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
