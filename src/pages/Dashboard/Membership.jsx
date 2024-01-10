import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layoutdash from "../../component/Layoutdash";

export const Membership = () => {
  return (
    <>
      <Layoutdash>
        <section className="outer-dash-section">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading">Membership Card</h2>

                    <Row>
                      <Col lg={8} md={9} sm={12} xs={12}>
                        <div className="membership-card-design">
                          <h2>Membership Card</h2>
                          <h3>
                            <span>Membership ID</span> <br /> 123456 786596
                          </h3>
                          <h4>
                            <span>Alok Agrawal</span>{" "}
                            <span>Valid to: 25/06/2024</span>
                          </h4>
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
