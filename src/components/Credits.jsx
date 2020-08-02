import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Typist from "react-typist";

const Credits = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        CREDITS
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>CREDITS</ModalHeader>
        <Typist>
          <ModalBody>
            <p>
              I hope you've enjoyed that little game I made with love. It's been
              fun and interesting to find my way out of technical matters I went
              throught as a junior Dev. The switches are CSS and SCSS code I've
              found on{" "}
              <a
                href="https://freefrontend.com/css-toggle-switches/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://freefrontend.com/css-toggle-switches/
              </a>{" "}
              if you have enjoyed them, and backgrounds as well as musics are
              also found on internet and are free. Do not hesitate to contact me
              for any request if you need to or even only love ^^ at this
              adress:{" "}
              <a href="mailto:marco.sch4064@gmail.com">
                marco.sch4064@gmail.com
              </a>{" "}
              . <br /> You can find me on Linkedin at{" "}
              <a
                href="https://www.linkedin.com/in/marc-schiavone/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.linkedin.com/in/marc-schiavone/
              </a>
              <br />
              THANKS FOR PLAYING!
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

export default Credits;
