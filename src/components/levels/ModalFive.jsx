import React, { useState } from "react";
import style from "./css/LevelFive.module.scss";
import Typist from "react-typist";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalFive = ({ user }) => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div className={style.modal}>
      <Button color="info" onClick={toggle}>
        Instructions
      </Button>
      <Modal centered="true" size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className={style.finalTitle}>
          Instructions!
        </ModalHeader>
        <Typist>
          <ModalBody>
            <p>
              Wooow {user.pseudo}, you did very well so far! This is the
              ultimate Switcher Master level!!! Set these switches on, so the
              light can illuminate NeoCity! Are you up to task?
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

export default ModalFive;
