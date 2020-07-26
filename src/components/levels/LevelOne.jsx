import React, { useState, useEffect } from "react";
import style from "../levels/css/LevelOneToTen.module.css";
import { Link } from "react-router-dom";
import { Button, Spinner } from "reactstrap";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../urls";
import { levelUp } from "../store/actionCreators";

export default function LevelOne() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isSolved, setisSolved] = useState(false);

  //those states are in game states
  const [switchOne, setswitchOne] = useState(false);
  const [switchTwo, setswitchTwo] = useState(true);
  const [switchThree, setswitchThree] = useState(false);

  const dispatch = useDispatch();
  const level = useSelector((state) => state.user.level);

  const levelId = 1;
  const uuid = localStorage.getItem("uuid");
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
    } catch (error) {
      alert("something bad happened");
    }
  };

  const switchOneTrick = () => {
    setswitchOne(!switchOne);
    setswitchTwo(!switchTwo);
  };

  const switchTwoTrick = () => {
    setswitchOne(!switchOne);
    setswitchTwo(!switchTwo);
    setswitchThree(!switchThree);
  };

  const switchThreeTrick = () => {
    setswitchOne(!switchOne);
    setswitchThree(!switchThree);
  };

  if (switchOne && switchTwo && switchThree) {
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
        <Link to="/game-board">
          {level > levelId ? (
            <Button color="success">Back to dashboard</Button>
          ) : (
            <Button color="success" onClick={() => goLevelUp()}>
              Back to dashboard
            </Button>
          )}
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Level 1</h1>
      <p>Turn all of them on!</p>
      <div>
        <label className={style.switch}>
          <input
            type="checkbox"
            onClick={() => switchOneTrick()}
            checked={switchOne}
          />
          <span className={style.slider}></span>
        </label>
      </div>
      <div>
        <label className={style.switch}>
          <input
            type="checkbox"
            onClick={() => switchTwoTrick()}
            checked={switchTwo}
          />
          <span className={style.slider}></span>
        </label>
      </div>
      <div>
        <label className={style.switch}>
          <input
            type="checkbox"
            onClick={() => switchThreeTrick()}
            checked={switchThree}
          />
          <span className={style.slider}></span>
        </label>
      </div>
    </div>
  );
}
