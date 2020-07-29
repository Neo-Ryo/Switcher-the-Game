import React, { useState } from "react";
import style from "./css/LevelFour.module.css";
import Typist from "react-typist";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalFour = ({ user }) => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div className={style.modal}>
      <Button color="info" onClick={toggle}>
        Instructions
      </Button>
      <Modal centered="true" size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Instructions</ModalHeader>
        <Typist>
          <ModalBody>
            <p>
              Good day {user.pseudo}, can you set the sun please, so the world
              can wake up? It should be easy for you since you've reached that
              level...
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

export default ModalFour;
