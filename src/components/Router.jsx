import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StartGame from "./Start";
import Register from "./Register";
import GameBoard from "./GameBoard";

export default function MyRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game-board">Game</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/game-board" component={GameBoard} />

          <Route path="/register" component={Register} />

          <Route exact path="/" component={StartGame} />
        </Switch>
      </div>
    </Router>
  );
}
