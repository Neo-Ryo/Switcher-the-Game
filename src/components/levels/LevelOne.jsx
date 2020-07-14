import React, { useState, useEffect } from "react";
import style from "../levels/css/LevelOneToTen.module.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Axios from "axios";
import { url } from "../../urls";
import { useSelector } from "react-redux";

export default function LevelOne() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isSolved, setisSolved] = useState(false);

  //those states are in game states
  const [switchOne, setswitchOne] = useState(false);
  const [switchTwo, setswitchTwo] = useState(true);
  const [switchThree, setswitchThree] = useState(false);

  const { uuid } = user;

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

  const levelUp = async () => {
    try {
      await Axios.post(`${url}/users/${uuid}/level`);
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
        <h1>CONGRATULATION!</h1>
        <Link to="/game-board">
          <Button>Back to dashboard</Button>
        </Link>
      </div>
    );
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
