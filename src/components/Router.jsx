import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartGame from "./Start";
import Login from "./Login";
import GameBoard from "./GameBoard";
import LevelOne from "./levels/LevelOne";
import LevelTwo from "./levels/LevelTwo";
import LevelThree from "./levels/LevelThree";
import LevelFour from "./levels/LevelFour";
import LevelFive from "./levels/LevelFive";

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/levels/5" component={LevelFive} />
        <Route path="/levels/4" component={LevelFour} />
        <Route path="/levels/3" component={LevelThree} />
        <Route path="/levels/2" component={LevelTwo} />
        <Route path="/levels/1" component={LevelOne} />
        <Route path="/game-board" component={GameBoard} />
        <Route path="/register" component={Login} />
        <Route exact path="/" component={StartGame} />
      </Switch>
    </Router>
  );
}
