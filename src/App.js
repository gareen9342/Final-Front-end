import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import MapService from "./pages/Map/MapService";
import Payment from "./pages/Iamport/Payment";

import Calendar from "./pages/Calendar/Calendar";
import Login from "./pages/login/Login";

import "./index.css";
import StudyForm from "./pages/StudyForm";
import MyStudy from "./pages/MyStudy";

import { signIn } from "./pages/login/Auth";

export default function App() {
  
  // 유저의 이메일 정보
  const [userValue, setUserValue] = useState(null); 

  // 로그인의 경우
  const authenticated = userValue != null;

  // 회원가입 유저 
  const [yesUser, setYesUser] = useState(null);


  // user 이메일 정보 삭제할 때
  const logout = () => setUserValue(null);
  //로그인한 유저정보를 가지고 온다. mail로 가지고 오게 된다.
  const signUserIn = (email) => {

    // email을 가지고온다.
    if(!!signIn(email)){

      // 이메일이 존재하면?
      // signIn 이 값이 들어오면 = > userValue에 이메일 정보가 넣어진다..
      return setUserValue(signIn(email));

      // 유저 정보가 없으면,
    }else {
      // 회원가입 페이지로 넘겨야됨
      // 값에 직접적으로 바꿔 줘야됨 
      const signUp
      return 

    }
    
  }

  return (
    <Router>
      <div>
        {/* 로그인 했을경우 Header가 보여지게 된다. */}
        {authenticated && <Header logout={logout} />}

        {/* 로그인 했을 경우 */}
        {authenticated && (
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/feed" component={Feed} />
              <Route exact path="/map" component={MapService} />
              <Route path="/mystudy" component={MyStudy} />
              <Route path="/study/generate" component={StudyForm} />
              <Route path="*" render={() => <div>404</div>} />
            </Switch>
          </>
        )}

        {/* 로그인하지 못했을 경우 */}
        {!authenticated && (
          <>
            <Route path="/" render={() => <Login signUserIn={signUserIn} />} />
          </>
        )}
      </div>
    </Router>
  );
}
