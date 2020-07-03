import React from "react";
import { Row, Col, Container } from "reactstrap";
import LevelCard from "./LevelCard";
import style from "../css/GameBoard.module.css";

export default function GameBoard() {
  const levels = [
    {
      id: 1,
      description: "the easiest level down here",
    },
    {
      id: 2,
      description: "the easiest level down here",
    },
    {
      id: 3,
      description: "the easiest level down here",
    },
  ];
  return (
    <Container fluid className={style.wrapper}>
      <h1>Welcome!</h1>
      <h3> Select a level</h3>
      <Row>
        {levels.map((i) => (
          <Col xs="12" sm="6" lg="3" style={{ marginTop: "2%" }}>
            <LevelCard level={i.id} description={i.description} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
