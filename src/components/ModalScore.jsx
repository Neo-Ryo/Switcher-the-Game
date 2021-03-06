import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import { GrScorecard } from "react-icons/gr";

const ModalScore = ({ users }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const nbrUsers = users.length;

  const lvl1 =
    (users.filter((user) => user.Level.name >= 2).length / nbrUsers) * 100;
  const lvl2 =
    (users.filter((user) => user.Level.name >= 3).length / nbrUsers) * 100;
  const lvl3 =
    (users.filter((user) => user.Level.name >= 4).length / nbrUsers) * 100;
  const lvl4 =
    (users.filter((user) => user.Level.name >= 5).length / nbrUsers) * 100;
  const lvl5 =
    (users.filter((user) => user.Level.name >= 6).length / nbrUsers) * 100;

  return (
    <div>
      <Button outline color="warning" onClick={toggle}>
        <GrScorecard /> Scores
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Score</ModalHeader>
        <ModalBody>
          <Table striped>
            <thead>
              <tr>
                <th>Levels</th>
                <th>Success</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LVL 1</td>
                <td>{lvl1.toFixed(1)}%</td>
              </tr>
              <tr>
                <td>LVL 2</td>
                <td>{lvl2.toFixed(1)}%</td>
              </tr>
              <tr>
                <td>LVL 3</td>
                <td>{lvl3.toFixed(1)}%</td>
              </tr>
              <tr>
                <td>LVL 4</td>
                <td>{lvl4.toFixed(1)}%</td>
              </tr>
              <tr>
                <td>LVL 5</td>
                <td>{lvl5.toFixed(1)}%</td>
              </tr>
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalScore;
