import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartGame from "./Start";
import Login from "./Login";
import GameBoard from "./GameBoard";
import LevelOne from "./levels/LevelOne";

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/levels/:id" component={LevelOne} />
        <Route path="/game-board" component={GameBoard} />
        <Route path="/register" component={Login} />
        <Route exact path="/" component={StartGame} />
      </Switch>
    </Router>
  );
}
