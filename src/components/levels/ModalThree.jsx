import React, { useState } from "react";
import style from "./css/LevelThree.module.css";
import Typist from "react-typist";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalThree = (props) => {
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
              It's late and it's bed time, you shall turn the lights off to go
              next level, after a good night...
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

export default ModalThree;
