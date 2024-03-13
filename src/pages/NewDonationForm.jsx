import React, { useState } from "react";
import Layout from "../component/Layout";
import { Col, Container, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import useAuth from "../hooks/useAuth";
import axiosMain from "../http/axios/axios_main";
import { Notification } from "../Notifications/Notification";

const NewDonationForm = () => {
  //=============== Globle vaiable ====================//
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation("/donate-now");
  const { amount } = state || "";
  //===============End of code====================//

  //======================Auth States=====================//
  const { user } = useAuth();
  //====================End of code====================//

  //=============== Local vaiable ====================//
  const [startDate, setStartDate] = useState(new Date());
  const [formError, setFormError] = useState("");
  const [disable, setDisable] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [inputValue, setInputValue] = useState({
    title: "",
    name: "",
    email: "",
    phone: "",
    pancard: "",
    date_of_birth: "",
    address1: "",
    address2: "",
    postalCode: "",
    City: "",
    State: "",
    Country: "",
    source: "",
    donername: "",
  });

  //===============End of code====================//
  const [paymentLoading, setPaymentLoading] = useState(false);

  //===============For PopUp Modal====================//
  const [openModel, setOpenModel] = useState(false);
  const [modelMessage, setModelMessage] = useState("");
  const [randomVal, setRandomVal] = useState("");
  //===============End of code====================//

  const HandleData = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  //========================= Handle donation function =========================//
  const HandleDonation = async () => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!inputValue.name) {
      setFormError("Please enter your full name");
    } else if (!regex.test(inputValue.email)) {
      setFormError("Please enter valid email");
    } else if (!phoneNumber) {
      setFormError("Please enter your Phone!");
    } else {
      setDisable(true);
      setFormError("");
      const payload = {
        userId: "",
        method: "upi",
        amount: amount,
        title: inputValue?.title,
        fullName: inputValue?.name,
        mobile: phoneNumber,
        email: inputValue?.email,
        panCard: inputValue?.pancard,
        address1: inputValue?.address1,
        address2: inputValue?.address2,
        postCode: inputValue?.postalCode,
        DOB: startDate,
        city: inputValue?.City,
        state: inputValue?.State,
        country: "India",
        sourceOfInfo: inputValue?.source,
        nameToBe: inputValue?.donername,
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
        if (Donation?.data?.data?.status) {
          const options = {
            key: "rzp_test_stZ12Y8PtmgNZi",
            amount: amount, // amount in paise
            currency: "INR",
            name: "Agrasen tirthdham Nirman Seva",
            description: "Agrasen tirthdham Nirman Seva",
            order_id: Donation?.data?.data?.id,
            handler: function (response) {
              // Handle the payment success
              const {
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
              } = response;

              VerifyPayment(
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
                Donation?.data?.data?.transationHistryId
              );
            },
          };
          const razorpayInstance = new window.Razorpay(options);
          razorpayInstance.open();

          setPaymentLoading(false);
        }
      } catch (err) {
        console.log(err);
        setDisable(false);
        setModelMessage(err?.response?.data?.message);
        setOpenModel(true);
        setRandomVal(Math.floor(Math.random() * 100 + 1));
      }
    }
  };
  //========================= end of code =========================//

  //=========================Verify Payment =========================//

  const VerifyPayment = async (
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    transationHistryId
  ) => {
    setDisable(true);
    setFormError("");
    const payload = {
      razorpay_order_id: razorpay_order_id,
      razorpay_payment_id: razorpay_payment_id,
      razorpay_signature: razorpay_signature,
      transationHistryId: transationHistryId,
    };
    try {
      const Verify = await axiosMain.post("/payment/verifyOrder", payload, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${user.token}`,
        },
      });

      if (Verify?.data?.success) {
        setDisable(false);
        setModelMessage(Verify?.data?.message);
        setOpenModel(true);
        setRandomVal(Math.floor(Math.random() * 100 + 1));
        setTimeout(() => {
          window.location.reload()
        }, 2000);
        
      }
    } catch (err) {
      console.log(err);
      setDisable(false);
      setModelMessage(err?.response?.data?.message);
      setOpenModel(true);
      setRandomVal(Math.floor(Math.random() * 100 + 1));
    }
  };
  //========================= end of code =========================//

  return (
    <>
      <Layout>
        <section className="form-login-sec">
          <Notification
            message_mo={modelMessage}
            action_mo={openModel}
            random_val={randomVal}
          />
          <Container>
            {/* <p className="devotee-head">
              Dear Devotees, Shri Ram Temple Kamarpal is being built in
              Balasore, Odisha by Suma Blessings Foundation. We do not have any
              relation or connection whatsoever with the Ram Mandir in Ayodhya
              or any other mandir in India or abroad.{" "}
            </p> */}
            <div className="outer-box-login for-register-outer new-donation-form">
              <Row>
                <Col lg={12}>
                  <div className="login-form-box-main">
                    {/* <h3 className=" text-center">
                      Shri Agrasen tirthdham Online Donation
                    </h3> */}

                    <h6 className="text-left color-grey mb-3">
                      We request you to contribute generously and invoke the
                      divine blessings of Lord Shree Agrasen Maharaj on your
                      family.
                      <br /> Join hands with us in the Bhavya Agrasen tirthdham
                      Nirman Seva!
                    </h6>

                    <div>
                      <Row>
                        <h4 className=" text-start font-w600">
                          1. Payment Method
                        </h4>
                        <Col lg={12}>
                          <Form.Group className="mb-3">
                            <div>
                              <form action="/" className="nationality-sec">
                                <Row>
                                  <Col md="4" sm="6">
                                    <div className=" align-items-center inner-back">
                                      <input
                                        type="radio"
                                        id="html"
                                        name="fav_language"
                                        value="HTML"
                                        checked
                                      />
                                      <label for="html">Online Payment</label>
                                    </div>
                                  </Col>
                                  {/* <Col md="4" sm="6">
                                    <div className=" align-items-center inner-back">
                                      <input
                                        type="radio"
                                        id="css"
                                        name="fav_language"
                                        value="CSS"
                                      />
                                      <label for="css">NRI</label>
                                    </div>
                                  </Col> */}
                                  {/* <Col md="4" sm="6">
                                    <div className=" align-items-center inner-back">
                                      <input
                                        type="radio"
                                        id="javascript"
                                        name="fav_language"
                                        value="JavaScript"
                                      />
                                      <label for="javascript">
                                        Foreign National
                                      </label>
                                    </div>
                                  </Col> */}
                                </Row>
                              </form>
                            </div>
                          </Form.Group>
                        </Col>
                        <br></br>

                        <h4 className=" text-start mb-3 font-w600">
                          2. Donor's Information
                        </h4>
                        <Col lg={2}>
                          <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <select
                              className="form-control"
                              name="title"
                              onChange={HandleData}
                              value={inputValue?.title}
                            >
                              <option value="Mr">Mr</option>
                              <option value="Miss">Miss</option>
                              <option value="Mrs">Mrs</option>
                              <option value="Ms">Ms</option>
                            </select>
                          </Form.Group>
                        </Col>
                        <Col lg={5}>
                          <Form.Group className="mb-3">
                            <Form.Label>Full Name*</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Full Name"
                              name="name"
                              onChange={HandleData}
                              value={inputValue?.name}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Please enter your Email"
                              onChange={HandleData}
                              value={inputValue?.email}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Phone No*</Form.Label>
                            <PhoneInput
                              className="input-group"
                              country={"in"}
                              name="phoneNumber"
                              placeholder="Phone Number"
                              //   onChange={HandleData}
                              onChange={(phone) => setPhoneNumber(phone)}
                              value={phoneNumber}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Pancard</Form.Label>
                            <Form.Control
                              type="text"
                              name="pancard"
                              placeholder="Enter your Pancard No."
                              onChange={HandleData}
                              value={inputValue?.pancard}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Date of Birth</Form.Label>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              maxDate={new Date()}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                              type="text"
                              name="address1"
                              placeholder="Flat/House/Unit No."
                              onChange={HandleData}
                              value={inputValue?.address1}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Address2</Form.Label>
                            <Form.Control
                              type="text"
                              name="address2"
                              placeholder="Street Address, Landmark, etc"
                              onChange={HandleData}
                              value={inputValue?.address2}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                              type="text"
                              name="postalCode"
                              placeholder="Postal Code"
                              onChange={HandleData}
                              value={inputValue?.postalCode}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              type="text"
                              name="City"
                              placeholder="Please enter your City Name"
                              onChange={HandleData}
                              value={inputValue?.City}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <select
                              className="form-control"
                              name="State"
                              onChange={HandleData}
                              value={inputValue?.State}
                            >
                              <option value="AP">Andhra Pradesh</option>
                              <option value="AR">Arunachal Pradesh</option>
                              <option value="AS">Assam</option>
                              <option value="BR">Bihar</option>
                              <option value="CT">Chhattisgarh</option>
                              <option value="GA">Gujarat</option>
                              <option value="HR">Haryana</option>
                              <option value="HP">Himachal Pradesh</option>
                              <option value="JK">Jammu and Kashmir</option>
                              <option value="GA">Goa</option>
                              <option value="JH">Jharkhand</option>
                              <option value="KA">Karnataka</option>
                              <option value="KL">Kerala</option>
                              <option value="MP">Madhya Pradesh</option>
                              <option value="MH">Maharashtra</option>
                              <option value="MN">Manipur</option>
                              <option value="ML">Meghalaya</option>
                              <option value="MZ">Mizoram</option>
                              <option value="NL">Nagaland</option>
                              <option value="OR">Odisha</option>
                              <option value="PB">Punjab</option>
                              <option value="RJ">Rajasthan</option>
                              <option value="SK">Sikkim</option>
                              <option value="TN">Tamil Nadu</option>
                              <option value="TG">Telangana</option>
                              <option value="TR">Tripura</option>
                              <option value="UT">Uttarakhand</option>
                              <option value="UP">Uttar Pradesh</option>
                              <option value="WB">West Bengal</option>
                              <option value="AN">
                                Andaman and Nicobar Islands
                              </option>
                              <option value="CH">Chandigarh</option>
                              <option value="DN">Dadra and Nagar Haveli</option>
                              <option value="DD">Daman and Diu</option>
                              <option value="DL">Delhi</option>
                              <option value="LD">Lakshadweep</option>
                              <option value="PY">Puducherry</option>
                            </select>
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Country</Form.Label>
                            <select
                              id="country"
                              name="country"
                              className="form-control"
                              value={"India"}
                            >
                              <option value="India">India</option>
                            </select>
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <h4 className=" text-start font-w600">
                            3. Source of Information
                          </h4>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              How did you get to know about us? *
                            </Form.Label>
                            <select
                              class="form-control"
                              required=""
                              name="source"
                              onChange={HandleData}
                              value={inputValue?.source}
                            >
                              <option value="Digital campaign/Website/Web search">
                                Digital campaign/Website/Web search
                              </option>
                              <option value="E-mailers">E-mailers</option>
                              <option value="Facebook/Twitter/LinkedIn">
                                Facebook/Twitter/LinkedIn
                              </option>
                              <option value="Tele-caller/Face to Face meeting">
                                Tele-caller/Face to Face meeting
                              </option>
                              <option value="On-ground CARE Events">
                                On-ground Events
                              </option>
                              <option value="Reference from existing donor">
                                Reference from existing donor
                              </option>
                              <option value="Any other source">
                                Any other source
                              </option>
                            </select>
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <h4 className=" text-start font-w600">
                            4. Name to be inscribed on the wall
                          </h4>
                          <Form.Group className="mb-3">
                            <Form.Label>For Shabri Seva Donor's*</Form.Label>
                            <Form.Control
                              type="text"
                              name="donername"
                              placeholder=""
                              onChange={HandleData}
                              value={inputValue?.donername}
                            />
                          </Form.Group>
                        </Col>
                      </Row>{" "}
                      <p style={{ color: "red" }}>{formError}</p>
                      <div className="text-center">
                        <button
                          className="cmn-btn style--three w-auto"
                          disabled={disable}
                          onClick={() => {
                            HandleDonation();
                          }}
                        >
                          {" "}
                          {disable === true
                            ? "Processing"
                            : "Proceed to donate"}
                        </button>
                        <p className="mt-2">
                          You can avail 80G tax benefit with this donation.
                        </p>
                      </div>
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

export default NewDonationForm;
