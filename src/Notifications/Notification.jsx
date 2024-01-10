import React, { useState, useEffect } from "react";
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";

export const Notification = (props) => {
  // alert(message)

  const [commonModel, setCommonModel] = useState(false);
  // console.log(props.action_mo);
  useEffect(() => {
    if (props.action_mo == true) {
      // console.log(props.action_mo);
      setCommonModel(true);
      setTimeout(() => {
        handleCommonModel();
      }, 3000);
    }
  }, [props.message_mo, props.action_mo, props.random_val]);
  const handleCommonModel = () => {
    setCommonModel(false);
    // props.action_mo = false
  };
  const handleCommonModelOp = () => {
    setCommonModel(true);
  };

  return (
    <>
      <Modal
        show={commonModel}
        onHide={handleCommonModel}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="sm"
        className="modal-comming-soon extention-modal"
        style={{}}
      >
        <Modal.Header
          style={{ borderBottom: "1px solid #d4600b" }}
          closeButton={handleCommonModel}
        ></Modal.Header>
        <Modal.Body>
          <h4 className="color-white text-center"> {props.message_mo}</h4>
        </Modal.Body>
      </Modal>
    </>
  );
};
