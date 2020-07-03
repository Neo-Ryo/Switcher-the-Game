import React, { useState } from "react";
import style from "../levels/css/LevelOneToTen.module.css";
import { Redirect } from "react-router-dom";

export default function LevelOne() {
  const [toggle, settoggle] = useState(false);
  const [switchOne, setswitchOne] = useState(false);
  const [switchTwo, setswitchTwo] = useState(true);
  const [switchTrhee, setswitchTrhee] = useState(false);
  if (switchOne && switchTwo && switchTrhee) {
    return <h1>CONGRATULATION!</h1>;
  }

  const switchTwoTrick = () => {
    setswitchOne(!switchOne);
    setswitchTwo(!switchTwo);
    setswitchTrhee(!switchTrhee);
  };
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Level 1</h1>
      <p>Turn all of them on!</p>
      <div>
        <label className={style.switch}>
          <input type="checkbox" onClick={() => setswitchOne(!toggle)} />
          <span className={style.slider}></span>
        </label>
      </div>
      <div>
        <label className={style.switch}>
          <input type="checkbox" onClick={() => switchTwoTrick()} checked />
          <span className={style.slider}></span>
        </label>
      </div>
      <div>
        <label className={style.switch}>
          <input type="checkbox" onClick={() => setswitchTrhee(!toggle)} />
          <span className={style.slider}></span>
        </label>
      </div>
    </div>
  );
}
