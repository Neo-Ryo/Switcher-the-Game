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
  const uuid = localStorage.getItem("uuid");

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const res = await Axios.get(`${url}/users`);
      setUsers(res.data);
      setIsLoading(false);
    } catch (error) {
      alert("Problems!");
    }
  };

  const getOneUser = async () => {
    try {
      setIsLoading(true);
      const res = await Axios.get(`${url}/users/${uuid}`);
      setUser(res.data);
      localStorage.setItem("level", res.data.level);
      setIsLoading(false);
    } catch (error) {
      alert("Problems!");
    }
  };

  useEffect(() => {
    getUsers();
    getOneUser();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Col className={style.wrapper}>
      <Row>
        <Col lg={{ size: 2 }} md={{ size: 6 }}>
          <Card>
            <CardImg top width="100%" src={user.picture} alt="Card image cap" />
            <CardBody>
              <CardTitle>{user.pseudo}</CardTitle>
              <CardSubtitle>Level: {user.level}</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <h1 style={{ color: "orange" }}>Welcome!</h1>
          <h3 style={{ color: "orange" }}> Select a level</h3>
        </Col>
        <Col lg={{ size: 2 }}>
          <ModalScore users={users} />
        </Col>
      </Row>
      <Row>
        {lvl.map((i) => (
          <Col xs="12" sm="6" lg="3" style={{ marginTop: "5vh" }}>
            <LevelCard
              level={i.id}
              description={i.description}
              id={i.id}
              isUnlock={i.id <= user.level ? false : true}
              color={i.id <= user.level ? "success" : "danger"}
            />
          </Col>
        ))}
      </Row>
    </Col>
  );
}
