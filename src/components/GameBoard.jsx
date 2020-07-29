import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Spinner,
  CardSubtitle,
  Container,
} from "reactstrap";
import LevelCard from "./LevelCard";
import ModalScore from "./ModalScore";
import style from "../css/GameBoard.module.css";
import lvl from "./levels.json";
import Axios from "axios";
import { url } from "../urls";

export default function GameBoard() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const uuid = sessionStorage.getItem("uuid");

  const getAllInfos = async () => {
    try {
      setIsLoading(true);
      const resUser = await Axios.get(`${url}/users/${uuid}`);
      const resUsers = await Axios.get(`${url}/users`);
      setUser(resUser.data);
      setUsers(resUsers.data);
      sessionStorage.setItem("level", resUser.data.level);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllInfos();
  }, [uuid]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Container fluid className={style.wrapper}>
      <Row>
        <Col lg={{ size: 2 }} md={{ size: 4 }}>
          <Card>
            <CardImg top src={user.picture} alt="Card image cap" />
            <CardBody>
              <CardTitle>{user.pseudo}</CardTitle>
              <CardSubtitle>Level: {user.level}</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col lg={{ size: 8 }} md={{ size: 4 }}>
          <h1 style={{ color: "orange" }}>Welcome!</h1>
          <h3 style={{ color: "orange" }}> Select a level</h3>
        </Col>
        <Col lg={{ size: 2 }} md={{ size: 4 }}>
          <ModalScore users={users} />
        </Col>
      </Row>
      <Row>
        {lvl.map((i) => (
          <Col xs="12" sm="6" lg="3" style={{ marginTop: "5vh" }}>
            <LevelCard
              key={i}
              level={i.id}
              description={i.description}
              id={i.id}
              isUnlock={i.id <= user.level ? false : true}
              color={i.id <= user.level ? "success" : "danger"}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
