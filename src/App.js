import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../test.css";

import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Test from "./pages/Test";

export default function App() {
  return (
    <Router>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feed">feed</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feed" component={Feed} />
          <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </div>
    </Router>
  );
}
