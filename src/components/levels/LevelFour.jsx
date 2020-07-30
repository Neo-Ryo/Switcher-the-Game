import React, { useState, useEffect } from "react";
import style from "./css/LevelFour.module.css";
import { Link, useHistory } from "react-router-dom";
import { Button, Spinner, Container, Row, Col } from "reactstrap";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { url } from "../../urls";
import { levelUp } from "../store/actionCreators";
import { Fade } from "react-reveal";
import smiley from "./img/smiley-surprised-100x100.png";
import ModalFour from "./ModalFour";

export default function LevelFour() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [levelDone, setLevelDone] = useState(false);
  const [isSolved, setisSolved] = useState(false);

  //those states are in game states
  const [switchOne, setswitchOne] = useState(false);
  const [switchTwo, setswitchTwo] = useState(false);
  const [switchThree, setswitchThree] = useState(true);
  const [switchFour, setswitchFour] = useState(false);
  const [switchFive, setswitchFive] = useState(true);
  const [switchSix, setswitchSix] = useState(false);
  const [switchSeven, setswitchSeven] = useState(false);
  const [switchEight, setswitchEight] = useState(false);
  const [switchNine, setswitchNine] = useState(false);
  const [switchTen, setswitchTen] = useState(true);
  const [switchEleven, setswitchEleven] = useState(true);
  const [switchTwelve, setswitchTwelve] = useState(false);
  const [switchThirteen, setswitchThirteen] = useState(true);
  const [switchFourteen, setswitchFourteen] = useState(true);
  const [switchFifteen, setswitchFifteen] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const level = sessionStorage.getItem("level");

  const levelId = 4;
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
    setswitchSix(!switchSix);
  };

  const switchFiveTrick = () => {
    setswitchFive(!switchFive);
    setswitchEight(!switchEight);
  };

  const switchSixTrick = () => {
    setswitchSix(!switchSix);
    setswitchSeven(!switchSeven);
    setswitchEight(!switchEight);
  };

  const switchSevenTrick = () => {
    setswitchSeven(!switchSeven);
    setswitchFourteen(!switchFourteen);
  };

  const switchEightTrick = () => {
    setswitchEight(!switchEight);
    setswitchSeven(!switchSeven);
  };

  const switchNineTrick = () => {
    setswitchOne(!switchOne);
    setswitchThree(!switchThree);
    setswitchFive(!switchFive);
    setswitchSeven(!switchSeven);
    setswitchNine(!switchNine);
    setswitchEleven(!switchEleven);
    setswitchThirteen(!switchThirteen);
    setswitchFifteen(!switchFifteen);
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

  const switchThirteenTrick = () => {
    setswitchFive(!switchFive);
    setswitchSeven(!switchSeven);
    setswitchEight(!switchEight);
    setswitchThirteen(!switchThirteen);
  };

  const switchFourteenTrick = () => {
    setswitchOne(!switchOne);
    setswitchThree(!switchThree);
    setswitchFive(!switchFive);
    setswitchTwelve(!switchTwelve);
    setswitchFourteen(!switchFourteen);
  };

  const switchFifteenTrick = () => {
    setswitchTwo(!switchTwo);
    setswitchSeven(!switchSeven);
    setswitchFourteen(!switchFourteen);
    setswitchFifteen(!switchFifteen);
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
    switchTwelve &&
    switchThirteen &&
    switchFourteen &&
    switchFifteen
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
            <h1 style={{ marginTop: "40vh" }}>WOOOOW! FANTASTIC! </h1>
            <img src={smiley} alt="smiley" />
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
          <ModalFour user={user} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={{ color: "black" }}>Level 4</h1>
        </Col>
      </Row>
      <Row className={style.switchDiv}>
        {/* Col one */}
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
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchFive}
              onChange={switchFiveTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
        </Col>
        {/* Col 2 */}
        <Col lg={{ size: 4 }} md={{ size: 4 }} sm={{ size: 4 }}>
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
        </Col>
        {/* Col 3 */}
        <Col lg={{ size: 4 }} md={{ size: 4 }} sm={{ size: 4 }}>
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
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchThirteen}
              onChange={switchThirteenTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchFourteen}
              onChange={switchFourteenTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
          <Col style={{ marginTop: "5vh", marginBottom: "5vh" }}>
            <input
              checked={switchFifteen}
              onChange={switchFifteenTrick}
              type="checkbox"
              className={style.switch}
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
