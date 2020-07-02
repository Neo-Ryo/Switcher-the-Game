import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartGame from "./Start";
import Register from "./Register";
import GameBoard from "./GameBoard";

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/game-board" component={GameBoard} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={StartGame} />
      </Switch>
    </Router>
  );
}
