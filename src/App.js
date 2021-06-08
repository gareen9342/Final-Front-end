import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Test from "./pages/Test";
import "./index.css";
export default function App() {
  return (
    <Router>
      <div class="w-64 h-32 mx-auto">
        <ul className="flex items-stretch pl-16 p-4 rounded-full mx-auto bg-black text-yellow-600">
          <li className="active:bg-green-700">
            <Link to="/">Home</Link>
          </li>
          <li className="px-12">
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
