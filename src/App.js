import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Iamport from "./pages/Iamport/Payment";

import "./index.css";
import StudyForm from "./pages/StudyForm";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Iamport" component={Iamport} />
          <Route path="/feed" component={Feed} />
          <Route path="/study/generate" component={StudyForm} />
          <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </div>
    </Router>
  );
}
