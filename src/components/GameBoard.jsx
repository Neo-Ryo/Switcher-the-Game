import React, { useEffect, useState } from "react";
import { Row, Col, Container, Spinner } from "reactstrap";
import LevelCard from "./LevelCard";
import style from "../css/GameBoard.module.css";
import lvl from "./levels.json";
import Axios from "axios";
import { url } from "../urls";
import { useSelector } from "react-redux";
import user from "./store/user.reducer";

export default function GameBoard() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const uuid = useSelector((state) => state.user.uuid);
  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true);
        const res = await Axios.get(`${url}/users/${uuid}`);
        setUser(res.data);
        console.log("coucou", res.data, uuid, `${url}/users/${uuid}`);
      } catch (error) {
        alert("Problems! ReLogin please!");
      } finally {
        setIsLoading(false);
      }
    };
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
          <Col xs="12" sm="6" lg="3" style={{ marginTop: "2%" }}>
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
