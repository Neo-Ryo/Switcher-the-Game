import React, { useState, useEffect } from "react";
import style from "./css/LevelTwo.module.css";
import { Link, useHistory } from "react-router-dom";
import { Button, Spinner, Container, Row, Col } from "reactstrap";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../urls";
import { levelUp } from "../store/actionCreators";

export default function LevelTwo() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [levelDone, setLevelDone] = useState(false);
  const [isSolved, setisSolved] = useState(false);

  //those states are in game states
  const [switchOne, setswitchOne] = useState(false);
  const [switchTwo, setswitchTwo] = useState(false);
  const [switchThree, setswitchThree] = useState(false);
  const [switchFour, setswitchFour] = useState(true);
  const [switchFive, setswitchFive] = useState(true);
  const [switchSix, setswitchSix] = useState(true);
  const [switchSeven, setswitchSeven] = useState(false);
  const [switchEight, setswitchEight] = useState(false);
  const [switchNine, setswitchNine] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const level = sessionStorage.getItem("level");

  const levelId = 1;
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
      alert("something bad happened");
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
  };

  const switchFourTrick = () => {
    setswitchThree(!switchThree);
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

  if (
    !switchOne &&
    !switchTwo &&
    !switchThree &&
    !switchFour &&
    !switchFive &&
    !switchSix &&
    !switchSeven &&
    !switchEight &&
    !switchNine
  ) {
    setLevelDone(true);
  }

  if (levelDone) {
    setTimeout(() => {
      setisSolved(true);
    }, 1000);
  }

  if (isSolved) {
    return (
      <div>
        {level > levelId ? (
          <h1>CONGRATULATION you did it again!</h1>
        ) : (
          <h1>CONGRATULATION!</h1>
        )}
        {level > levelId ? (
          <Link to="/game-board">
            <Button color="success">Back to dashboard</Button>
          </Link>
        ) : (
          <Button color="success" onClick={() => goLevelUp()}>
            Back to dashboard
          </Button>
        )}
      </div>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Container fluid className={levelDone ? style.wrapper1 : style.wrapper1}>
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
          <h1 style={{ color: "black" }}>Level 2</h1>
          <p>
            All of this light is kinda dazzling, turn all of the switches OFF!
          </p>
        </Col>
      </Row>
      <Row className={style.switchDiv}>
        <Col lg={{ size: 4 }} md={{ size: 4 }} sm={{ size: 4 }}>
          <Col>
            <label className={style.label}>
              <div className={style.toggle}>
                <input
                  className={style.toggleState}
                  type="checkbox"
                  name="check"
                  checked={switchOne}
                  onClick={switchOneTrick}
                />
                <div className={style.indicator}></div>
              </div>
            </label>
          </Col>
          <Col>
            <label className={style.label}>
              <div className={style.toggle}>
                <input
                  className={style.toggleState}
                  type="checkbox"
                  name="check"
                  checked={switchTwo}
                  onClick={() => switchTwoTrick()}
                />
                <div className={style.indicator}></div>
              </div>
            </label>
          </Col>
          <Col>
            <label className={style.label}>
              <div className={style.toggle}>
                <input
                  className={style.toggleState}
                  type="checkbox"
                  name="check"
                  checked={switchThree}
                  onClick={() => switchThreeTrick()}
                />
                <div className={style.indicator}></div>
              </div>
            </label>
          </Col>
        </Col>
        <Col lg={{ size: 4 }} md={{ size: 4 }} sm={{ size: 4 }}>
          <Col>
            <label className={style.label}>
              <div className={style.toggle}>
                <input
                  className={style.toggleState}
                  type="checkbox"
                  name="check"
                  checked={switchFour}
                  onClick={() => switchFourTrick()}
                />
                <div className={style.indicator}></div>
              </div>
            </label>
          </Col>
          <Col>
            <label className={style.label}>
              <div className={style.toggle}>
                <input
                  className={style.toggleState}
                  type="checkbox"
                  name="check"
                  checked={switchFive}
                  onClick={() => switchFiveTrick()}
                />
                <div className={style.indicator}></div>
              </div>
            </label>
          </Col>
          <Col>
            <label className={style.label}>
              <div className={style.toggle}>
                <input
                  className={style.toggleState}
                  type="checkbox"
                  name="check"
                  checked={switchSix}
                  onClick={() => switchSixTrick()}
                />
                <div className={style.indicator}></div>
              </div>
            </label>
          </Col>
        </Col>
        <Col lg={{ size: 4 }} md={{ size: 4 }} sm={{ size: 4 }}>
          <Col>
            <label className={style.label}>
              <div className={style.toggle}>
                <input
                  className={style.toggleState}
                  type="checkbox"
                  name="check"
                  checked={switchSeven}
                />
                <div className={style.indicator}></div>
              </div>
            </label>
          </Col>
          <Col>
            <label className={style.label}>
              <div className={style.toggle}>
                <input
                  className={style.toggleState}
                  type="checkbox"
                  name="check"
                  checked={switchEight}
                />
                <div className={style.indicator}></div>
              </div>
            </label>
          </Col>
          <Col>
            <label className={style.label}>
              <div className={style.toggle}>
                <input
                  className={style.toggleState}
                  type="checkbox"
                  name="check"
                  checked={switchNine}
                />
                <div className={style.indicator}></div>
              </div>
            </label>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
