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
  const Users = users;
  const nbrUsers = Users.length;
  const lvl1 = Users.filter((user) => user.level === 1);
  console.log(lvl1);
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
                <th>#</th>
                <th>Levels</th>
                <th>Success</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>LVL 1</td>
                <td>%</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>LVL 2</td>
                <td>%</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>LVL 3</td>
                <td>%</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>LVL 4</td>
                <td>%</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>LVL 5</td>
                <td>%</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>LVL 6</td>
                <td>%</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>LVL 7</td>
                <td>%</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>LVL 8</td>
                <td>%</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>LVL 9</td>
                <td>%</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>LVL 10</td>
                <td>%</td>
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
