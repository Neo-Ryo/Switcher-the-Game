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
    (users.filter((user) => user.level >= 2).length / nbrUsers) * 100;
  const lvl2 =
    (users.filter((user) => user.level >= 3).length / nbrUsers) * 100;
  const lvl3 =
    (users.filter((user) => user.level >= 4).length / nbrUsers) * 100;
  const lvl4 =
    (users.filter((user) => user.level >= 5).length / nbrUsers) * 100;
  const lvl5 =
    (users.filter((user) => user.level >= 6).length / nbrUsers) * 100;
  const lvl6 =
    (users.filter((user) => user.level >= 7).length / nbrUsers) * 100;
  const lvl7 =
    (users.filter((user) => user.level >= 8).length / nbrUsers) * 100;
  const lvl8 =
    (users.filter((user) => user.level >= 9).length / nbrUsers) * 100;
  const lvl9 =
    (users.filter((user) => user.level >= 10).length / nbrUsers) * 100;
  const lvl10 =
    (users.filter((user) => user.level >= 11).length / nbrUsers) * 100;

  return (
    <div>
      <Button color="warning" onClick={toggle}>
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
              <tr>
                <td>LVL 6</td>
                <td>{lvl6.toFixed(1)}%</td>
              </tr>
              <tr>
                <td>LVL 7</td>
                <td>{lvl7.toFixed(1)}%</td>
              </tr>
              <tr>
                <td>LVL 8</td>
                <td>{lvl8.toFixed(1)}%</td>
              </tr>
              <tr>
                <td>LVL 9</td>
                <td>{lvl9.toFixed(1)}%</td>
              </tr>
              <tr>
                <td>LVL 10</td>
                <td>{lvl10.toFixed(1)}%</td>
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
