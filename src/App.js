import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Payment from "./pages/Iamport/Payment";
import KakaoMap from "./pages/Map/Map";
import Kakao from "./pages/login/Kakao";
import Naver from "./pages/login/Naver";
import TestService from "./pages/Iamport/test";

import "./index.css";
import StudyForm from "./pages/StudyForm";

export default function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
            <Route path="/payment" component={Payment} />
            <Route path="/test" component={TestService} />
          <Route path="/feed" component={Feed} />
          <Route exact path="/map" component={KakaoMap} />
          <Route path="/study/generate" component={StudyForm} />
          <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </div>
      <>
        <Naver />
        <Kakao />
      </>

    </Router>
  );
}
