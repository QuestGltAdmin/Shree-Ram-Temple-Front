import axios from 'axios'
import React, { useState } from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Layout from '../component/Layout'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export const Register = () => {

        //=============== Globle vaiable ====================//
  const navigate = useNavigate();
  
  //===============End of code====================//

  //=============== Local vaiable ====================//
  const [formError, setFormError] = useState("");
  const [disable, setDisable] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    countryCode: "",
    email: "",
    password: "",
    copassword:"",
    referral: "",
  });
  const [phoneNumber, setPhoneNumber] = useState();

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
   if (!inputValue.name) {
     setFormError("Please enter valid user name");
   } else if (!inputValue.password) {
     setFormError("Please enter your password!");
    } else if (!inputValue.phone) {
        setFormError("Please enter your Phone!");
    } else if (inputValue.password !== inputValue.copassword) {
        setFormError("password does not match");
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
      const loginData = await axios.post(
         "https://blockspace.donative.in:3009/signUp",
         payload,
       );
       if (loginData.status === 200) {
         setDisable(false);
         setFormError("Register successfully, Now Please Login")
         setTimeout(() => {
           navigate("/login");
         }, 3000);
       }
     } catch (err) {
        console.log(err);
       setDisable(false);
       setFormError(err.response.data.message);
     }
   }
 };
 //========================= end of code =========================//


  return (
    <>
    <Layout>
    <section className="login-header-strip">
         <Container>
            <Row>
               <Col>
                  <h2>Sign Up</h2>
                  <ul>
                     <li>
                        <a href="">Home</a>
                     </li>
                     <li className="active">
                        Sign Up
                     </li>
                  </ul>
               </Col>
            </Row>
           
         </Container>
      </section>
      <section className="form-login-sec">
         <Container>
             <div className="outer-box-login for-register-outer">
             <Row>
               <Col lg={12}>
                  <div className="login-form-box-main">
                      <h2>Hi. welcome to <br/> Agrasen Ji Maharaj Temple, <br/> Indore, Madhya Pradesh</h2>
                      <p>Please provide your valid infomations to get the benefits form our site.</p>

                      <div>
                            <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Full Name</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text><i className="fas fa-user" /></InputGroup.Text>
                                                <Form.Control type="text" placeholder="Full Name"
                                                name="name"
                                                onChange={HandleData}
                                                value={inputValue.name} />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                    <Form.Group className="mb-3">
                                            <Form.Label>Phone Number</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text><i className="fas fa-phone" />
                                                {/* <Form.Control type="text" placeholder="Phone Number" 
                                                name="phone"
                                                onChange={HandleData}
                                                value={inputValue.phone}
                                                /> */}

<PhoneInput
                                country={inputValue.countryCode}
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={HandelPhoneNo}
                                placeholder="Phone Number"
                              />
                              </InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    
                                    <Col lg={6}>
                                    <Form.Group className="mb-3">
                                            <Form.Label>Password</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text><i className="fas fa-lock" /></InputGroup.Text>
                                                <Form.Control type="text" placeholder="Password"
                                                 name="password"
                                                 onChange={HandleData}
                                                 value={inputValue.password} />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                    <Form.Group className="mb-3">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text><i className="fas fa-lock" /></InputGroup.Text>
                                                <Form.Control type="text" placeholder="Confirm Password"
                                                 name="copassword"
                                                 onChange={HandleData}
                                                 value={inputValue.copassword}
                                                  />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    
                                </Row>
                                <Row>
                                    
                                    <Col lg={6}>
                                    <Form.Group className="mb-3">
                                            <Form.Label>Email address (Optional)</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text><i className="fas fa-envelope" /></InputGroup.Text>
                                                <Form.Control type="email" placeholder="Email address" 
                                                 name="email"
                                                 onChange={HandleData}
                                                 value={inputValue.email}
                                                 />
                                            </InputGroup>
                                            
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                    <Form.Group className="mb-3">
                                            <Form.Label>Referral Code (Optional)</Form.Label>
                                            <Form.Control type="email" placeholder="Referral Code"
                                             name="referral"
                                             onChange={HandleData}
                                             value={inputValue.referral} />
                                        </Form.Group>
                                   
                                    </Col>
                                    
                                </Row>
                                <p>{formError}</p>
                                <Row>
                                    <Col lg={12}>
                                       
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="I Accept All Terms and Condition" />
                                        </Form.Group>
                                    </Col>
                                    
                                </Row>
                            <button className="cmn-btn"
                            disabled={disable}
                            onClick={() => {
                              HandleReister();
                            }}>Submit</button>
                      </div>
                  </div>
               </Col>
            </Row>
             </div>
        </Container>
    </section>
      </Layout>
      
    </>
  )
}
