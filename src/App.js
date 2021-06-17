import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import KakaoMap from "./pages/Map/Map";
import Kakao from "./pages/login/Kakao";
import Naver from "./pages/login/Naver";
import Iamport from "./pages/Iamport/Payment";
import StudyForm from "./pages/StudyForm";
import MyStudy from "./pages/MyStudy"

import Google from "./pages/login/Google";

import UseInputSample from "./hooks/UseInputSample";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Iamport" component={Iamport} />
          <Route path="/feed" component={Feed} />
          <Route exact path="/map" component={KakaoMap} />
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
