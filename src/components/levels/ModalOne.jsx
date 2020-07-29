import React, { useState } from "react";
import Typist from "react-typist";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import style from "./css/LevelOne.module.css";
const ModaleOne = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div className={style.modal}>
      <Button color="info" onClick={toggle}>
        Instructions
      </Button>
      <Modal
        centered="true"
        size="lg"
        isOpen={modal}
        toggle={toggle}
        className={className}
      >
        <ModalHeader toggle={toggle}>Instructions</ModalHeader>
        <Typist>
          <ModalBody>
            <p>Turn all the switches on to pass this EASY level.</p>
          </ModalBody>
        </Typist>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModaleOne;
