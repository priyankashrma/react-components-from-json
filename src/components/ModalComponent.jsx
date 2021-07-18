import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const ModalComponent = (props) => {
  const [show, setShow] = useState(props.isOpen);

  const handleClose = () => setShow(false);
  return (
    <Modal
      centered
      id="modal"
      show={show}
      onHide={handleClose}
      style={{ width: props.width, height: props.height }}
    >
      {props.children}
    </Modal>
  );
};

export default ModalComponent;
