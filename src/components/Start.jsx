import React, { useState } from "react";
import style from "../css/start.module.css";
export default function StartGame() {
  const [toggle, settoggle] = useState(false);
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>The Switcher</h1>
      <label className={style.switch}>
        <input type="checkbox" onClick={() => settoggle(!toggle)} />
        <span className={style.slider}></span>
      </label>
    </div>
  );
}
