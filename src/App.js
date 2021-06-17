import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import MapService from "./pages/Map/MapService";
import Kakao from "./pages/login/Kakao";
import Naver from "./pages/login/Naver";
import StudyForm from "./pages/StudyForm";
import MyStudy from "./pages/MyStudy";

import UseInputSample from "./hooks/UseInputSample";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feed" component={Feed} />
          <Route exact path="/map" component={MapService} />
          <Route path="/study/generate" component={StudyForm} />
          <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </div>
      <>
        <Naver />
        <Kakao />
        <Google/>
      </>
    </Router>
  );
}
