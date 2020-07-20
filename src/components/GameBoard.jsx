import React, { useEffect, useState } from "react";
import { Row, Col, Container, Spinner } from "reactstrap";
import LevelCard from "./LevelCard";
import style from "../css/GameBoard.module.css";
import lvl from "./levels.json";
import Axios from "axios";
import { url } from "../urls";

export default function GameBoard() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const uuid = localStorage.getItem("uuid");

  const getUser = async () => {
    try {
      setIsLoading(true);
      const res = await Axios.get(`${url}/users/${uuid}`);
      setUser(res.data);
      localStorage.setItem("level", res.data.level);
      setIsLoading(false);
    } catch (error) {
      alert("Problems! ReLogin please!");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Container fluid className={style.wrapper}>
      <h1>Welcome!</h1>
      <h3> Select a level</h3>
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
    </Container>
  );
}
