import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartGame from "./Start";
import Login from "./Login";
import GameBoard from "./GameBoard";
import LevelOne from "./levels/LevelOne";
import LevelTwo from "./levels/LevelTwo";

export default function MyRouter() {
  const levels = [
    {
      level: 1,
      component: { LevelOne },
    },
    {
      level: 2,
      component: { LevelTwo },
    },
  ];
  return (
    <Router>
      <Switch>
        <Route path="/levels/:id" component={levels} />
        <Route path="/game-board" component={GameBoard} />
        <Route path="/register" component={Login} />
        <Route exact path="/" component={StartGame} />
      </Switch>
    </Router>
  );
}
