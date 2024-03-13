import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Form, Pagination } from "react-bootstrap";
import Layoutdash from "../../component/Layoutdash";
import axiosMain from "../../http/axios/axios_main";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  //======================Auth States=====================//
  const { user } = useAuth();
  //====================End of code====================//

  //======================Local Variable=====================//
  const [totaldonation, setTotalDonation] = useState("");
  const [refereduser, setReferedUser] = useState("");
  const [totaldonater, setTotalDonater] = useState("");
  //====================End of code====================//

  useEffect(() => {
    DasboardData();
  }, []);

  const DasboardData = async () => {
    try {
      const dasboarddata = await axiosMain.post(
        "/users/user-dashboard",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${user.token}`,
          },
        }
      );
      console.log(dasboarddata, "dashbaord daa");
      if (dasboarddata?.data?.status) {

        console.log(dasboarddata?.data?.data?.totalAmount,"ppp")
        console.log(dasboarddata?.data?.data?.totalRefferedUser,"ooo")
        console.log(dasboarddata?.data?.data?.totalDonater,"lll")

        setTotalDonation(dasboarddata?.data?.data?.totalAmount);
        setReferedUser(dasboarddata?.data?.data?.totalRefferedUser);
        setTotalDonater(dasboarddata?.data?.data?.totalDonater);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Layoutdash>
        <section className="outer-dash-section">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading">Dashboard</h2>
                    <Row>
                      <Col lg={4} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <p>Total Donation</p>
                          {/* <h4>10,00,000</h4> */}
                          <h4>{totaldonation}</h4>
                        </div>
                      </Col>

                      <Col lg={4} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <p>Total Referral</p>
                          {/* <h4>480</h4> */}
                          <h4>{refereduser}</h4>
                        </div>
                      </Col>
                      <Col lg={4} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <p>Total Donatar</p>
                          {/* <h4>200</h4> */}
                          <h4>{totaldonater}</h4>
                        </div>
                      </Col>
                    </Row>
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

export default Dashboard;
