import React, { useState } from "react";
import style from "./css/LevelTwo.module.css";
import Typist from "react-typist";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalTwo = (props) => {
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
            <p>
              All of this light is kinda dazzling, turn all of the switches OFF!{" "}
              <br />
              The "OFF" position is the left one.
            </p>
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

export default ModalTwo;
