import React, { useState } from "react";
import style from "../levels/css/LevelOneToTen.module.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function LevelOne() {
  const [isSolved, setisSolved] = useState(false);

  //those states are in game states
  const [switchOne, setswitchOne] = useState(false);
  const [switchTwo, setswitchTwo] = useState(true);
  const [switchThree, setswitchThree] = useState(false);

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
