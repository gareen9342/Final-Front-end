import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import KakaoMap from "./pages/Map/Map";
import Kakao from "./pages/login/Kakao";
import Naver from "./pages/login/Naver";
import StudyForm from "./pages/MyStudy/StudyForm";
import MyStudy from "./pages/MyStudy";

import UseInputSample from "./hooks/UseInputSample";

export default function App() {
  /**
   * path : 어떤 url로 접속을 할 건지
   * component : 그 url로 접속했을 때 띄워줄 component지정
   */
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feed" component={Feed} />
          <Route exact path="/map" component={KakaoMap} />
          <Route path="/study/generate" component={StudyForm} />
          {/* <Route path="/sample" component={UseInputSample} /> */}
          {/* useInputSample 입니다~ */}

          <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </div>
      <>
        {/* <Naver />
        <Kakao /> */}
      </>
    </Router>
  );
}
