import React, { useState } from "react";
import style from "../css/Start.module.css";
import { Redirect } from "react-router-dom";
import ambiance from "./music/chill-start-music.mp3";
import { Container, Col, Row } from "reactstrap";

export default function StartGame() {
  const [toggle, settoggle] = useState(false);
  const [timer, settimer] = useState(false);

  if (toggle) {
    setTimeout(() => {
      settimer(true);
    }, 1000);
  }
  if (timer) {
    return <Redirect to="/register" />;
  }
  return (
    <Container fluid className={style.wrapper}>
      <Row>
        <Col></Col>
        <Col md="4" sm="4">
          <audio autoPlay>
            <source src={ambiance} type="audio/mpeg" />
          </audio>
          <h1 className={style.title}>The Switcher</h1>
          <input
            type="checkbox"
            className={style.checkBox}
            name=""
            onClick={() => settoggle(!toggle)}
          ></input>
          <Row>
            <Col></Col>
            <Col>
              <p className={style.start}>Press to start</p>
            </Col>
            <Col></Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
