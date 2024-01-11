import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Form, Pagination } from "react-bootstrap";
import Layoutdash from "../../component/Layoutdash";
import useAuth from "../../hooks/useAuth";
import axios from "../../http/axios/axios_main";

const Transactions = () => {
  const { user } = useAuth();
  //=============== Local vaiable ====================//
  const [referralList, setReferralList] = useState();
  //===============End of code====================//

  //================== useEffect for funtion call =========================//
  useEffect(() => {
    getAllreferral();
  }, []);
  //=======================End of code===============================//

  //=============== Funtion to get Referral list ====================//
  const getAllreferral = async () => {
    try {
      const url = "/users/my_referred_user_list";
      const res = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${user.token}`,
        },
      });
      setReferralList(res?.data?.data);
      console.log(res?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  //=======================End of code===============================//

  return (
    <>
      <Layoutdash>
        <section className="outer-dash-section">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading mb-2">Referral List</h2>

                    <Row>
                      <Col>
                        <div className="table-box-new shadow-box-main">
                          <div className="d-flex justify-content-between outer-show-table mb-3">
                            <div className="d-flex ">
                              <span>Show Entries </span>
                              <Form.Select aria-label="Default select example">
                                <option>10</option>
                                <option value="1">25</option>
                                <option value="2">50</option>
                                <option value="3">100</option>
                              </Form.Select>
                            </div>
                            <div className="d-flex">
                              <span>Search </span>
                              <Form.Group className="">
                                <Form.Control type="text" placeholder="" />
                              </Form.Group>
                            </div>
                          </div>
                          <div className="table-responsive">
                            <Table bordered>
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Referred User Name</th>
                                  <th>Donate Amount</th>
                                </tr>
                              </thead>
                              {referralList === null ||
                                referralList === undefined ||
                                referralList === "" ||
                                referralList.length === 0 ? (
                                  <tr>
                                    <td >No Records Found!</td>
                                  </tr>
                                ) : (
                                  ""
                                )}
                              {referralList?.map((item, index) => {
                                return (
                                  <tbody>
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{item.fullName}</td>
                                      <td>0</td>
                                    </tr>
                                    {/* <tr>
                                  <td>2</td>
                                  <td>Jacob</td>
                                  <td>2000</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>John</td>
                                  <td>3000</td>
                                </tr> */}
                                  </tbody>
                                );
                              })}
                            </Table>
                          </div>
                          <div className="d-flex justify-content-between outer-show-table">
                            <div className="d-flex ">
                              <span>Showing 1 to 10 of 57 entries </span>
                            </div>
                            <div className="d-flex">
                              <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item>{12}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                              </Pagination>
                            </div>
                          </div>
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

export default Transactions;
