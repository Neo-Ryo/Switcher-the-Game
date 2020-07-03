import React, { useState } from "react";
import style from "../css/Start.module.css";
import { Redirect } from "react-router-dom";

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
    <div className={style.wrapper}>
      <h1 className={style.title}>The Switcher</h1>
      <label className={style.switch}>
        <input type="checkbox" id="switch" onClick={() => settoggle(!toggle)} />
        <span className={style.slider}></span>
      </label>
      <p className={style.start}>Press to start</p>
    </div>
  );
}
