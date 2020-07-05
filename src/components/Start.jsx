import React, { useState } from "react";
import style from "../css/Start.module.css";
import { Redirect } from "react-router-dom";
import ambiance from "./music/chill-start-music.mp3";

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
      <audio autoPlay>
        <source src={ambiance} type="audio/mpeg" />
      </audio>
      <h1 className={style.title}>The Switcher</h1>
      <input type="checkbox" name="" onClick={() => settoggle(!toggle)}></input>

      <p className={style.start}>Press to start</p>
    </div>
  );
}
