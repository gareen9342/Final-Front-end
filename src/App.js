import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Kakao from "./pages/login/Kakao";
import Naver from "./pages/login/Naver";
import StudyForm from "./pages/MyStudy/StudyForm";
import MyStudy from "./pages/MyStudy";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feed" component={Feed} />
          <Route path="/my_study" component={MyStudy} />
          <Route path="/study/generate" component={StudyForm} /> // 임시~
          <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </div>
    </Router>
  );
}
