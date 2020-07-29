import React, { useState, useEffect } from "react";
import style from "./css/LevelFour.module.css";
import { Link, useHistory } from "react-router-dom";
import { Button, Spinner, Container, Row, Col } from "reactstrap";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { url } from "../../urls";
import { levelUp } from "../store/actionCreators";
import { Fade } from "react-reveal";
import ModalFour from "./ModalFour";

export default function LevelFour() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [levelDone, setLevelDone] = useState(false);
  const [isSolved, setisSolved] = useState(false);

  //those states are in game states
  const [switchOne, setswitchOne] = useState(false);
  const [switchTwo, setswitchTwo] = useState(true);
  const [switchThree, setswitchThree] = useState(false);
  const [switchFour, setswitchFour] = useState(true);
  const [switchFive, setswitchFive] = useState(false);
  const [switchSix, setswitchSix] = useState(false);
  const [switchSeven, setswitchSeven] = useState(false);
  const [switchEight, setswitchEight] = useState(true);
  const [switchNine, setswitchNine] = useState(false);
  const [switchTen, setswitchTen] = useState(false);
  const [switchEleven, setswitchEleven] = useState(false);
  const [switchTwelve, setswitchTwelve] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const level = sessionStorage.getItem("level");

  const levelId = 3;
  const uuid = sessionStorage.getItem("uuid");
  // const levelStored = localStorage.getItem("level");

  const getUser = async () => {
    try {
      setIsLoading(true);
      const res = await Axios.get(`${url}/users/${uuid}`);
      setUser(res.data);
      setIsLoading(false);
    } catch (error) {
      alert("Problems!");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const goLevelUp = async () => {
    try {
      await dispatch(levelUp());
      getUser();
      history.push("/game-board");
    } catch (error) {
      console.log(error);
    }
  };

  const switchOneTrick = () => {
    setswitchOne(!switchOne);
    setswitchNine(!switchNine);
  };

  const switchTwoTrick = () => {
    setswitchOne(!switchOne);
    setswitchTwo(!switchTwo);
    setswitchFour(!switchFour);
    setswitchSeven(!switchSeven);
  };

  const switchThreeTrick = () => {
    setswitchOne(!switchOne);
    setswitchThree(!switchThree);
    setswitchFour(!switchFour);
    setswitchEight(!switchEight);
  };

  const switchFourTrick = () => {
    setswitchFour(!switchFour);
    setswitchNine(!switchNine);
  };

  const switchFiveTrick = () => {
    setswitchFive(!switchFive);
    setswitchEight(!switchEight);
  };

  const switchSixTrick = () => {
    setswitchTwo(!switchTwo);
    setswitchSix(!switchSix);
    setswitchSeven(!switchSeven);
  };

  const switchSevenTrick = () => {
    setswitchSeven(!switchSeven);
    setswitchFour(!switchFour);
  };

  const switchEightTrick = () => {
    setswitchEight(!switchEight);
  };

  const switchNineTrick = () => {
    setswitchOne(!switchOne);
    setswitchTwo(!switchTwo);
    setswitchThree(!switchThree);
    setswitchFour(!switchFour);
    setswitchFive(!switchFive);
    setswitchSix(!switchSix);
    setswitchSeven(!switchSeven);
    setswitchEight(!switchEight);
    setswitchNine(!switchNine);
    setswitchTen(!switchTen);
    setswitchEleven(!switchEleven);
    setswitchTwelve(!switchTwelve);
  };

  const switchTenTrick = () => {
    setswitchThree(!switchThree);
    setswitchFour(!switchFour);
    setswitchFive(!switchFive);
    setswitchEight(!switchEight);
    setswitchTen(!switchTen);
    setswitchEleven(!switchEleven);
  };

  const switchElevenTrick = () => {
    setswitchOne(!switchOne);
    setswitchThree(!switchThree);
    setswitchFive(!switchFive);
    setswitchSeven(!switchSeven);
    setswitchNine(!switchNine);
    setswitchEleven(!switchEleven);
  };

  const switchTwelveTrick = () => {
    setswitchFive(!switchFive);
    setswitchFour(!switchFour);
    setswitchSeven(!switchSeven);
    setswitchEight(!switchEight);
    setswitchTwelve(!switchTwelve);
  };

  if (
    switchOne &&
    switchTwo &&
    switchThree &&
    switchFour &&
    switchFive &&
    switchSix &&
    switchSeven &&
    switchEight &&
    switchNine &&
    switchTen &&
    switchEleven &&
    switchTwelve
  ) {
    setTimeout(() => {
      setisSolved(true);
    }, 1000);
  }

  if (isSolved) {
    return (
      <div>
        {level > levelId ? (
          <Fade>
            <h1 style={{ marginTop: "40vh" }}>
              CONGRATULATION you did it again!
            </h1>
            <h3>Lights are out!</h3>
            <Link to="/game-board">
              <Button color="success">Back to dashboard</Button>
            </Link>
          </Fade>
        ) : (
          <Fade>
            <h1 style={{ marginTop: "40vh" }}>CONGRATULATION!</h1>
            <h3>Lights are out!</h3>
            <Button color="success" onClick={() => goLevelUp()}>
              Back to dashboard
            </Button>
          </Fade>
        )}
      </div>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Container fluid className={style.wrapper}>
      <Row>
        <Col>
          <Link to="/game-board">
            <Button outline block>
              Back to dashboard
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <ModalFour />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={{ color: "black" }}>Level 3</h1>
        </Col>
      </Row>
      <Row className={style.switchDiv}>
        <Col lg={{ size: 4 }} md={{ size: 4 }} sm={{ size: 4 }}>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchOne}
              onChange={switchOneTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchTwo}
              onChange={switchTwoTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchThree}
              onChange={switchThreeTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchFour}
              onChange={switchFourTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
        </Col>
        <Col lg={{ size: 4 }} md={{ size: 4 }} sm={{ size: 4 }}>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchFive}
              onChange={switchFiveTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchSix}
              onChange={switchSixTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchSeven}
              onChange={switchSevenTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchEight}
              onChange={switchEightTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
        </Col>
        <Col lg={{ size: 4 }} md={{ size: 4 }} sm={{ size: 4 }}>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchNine}
              onChange={switchNineTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchTen}
              onChange={switchTenTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchEleven}
              onChange={switchElevenTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchTwelve}
              onChange={switchTwelveTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
