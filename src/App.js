import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import MapService from "./pages/Map/MapService";
import Login from "./pages/login/Login";

import "./index.css";
import StudyForm from "./pages/StudyForm";

import { signIn } from "./pages/login/Auth";

export default function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userValue, setUserValue] = useState(null);
  const authenticated = userValue != null;

  const signUserIn = (name, email) => {
    setName(name);
    setEmail(email);

    console.log("상단에서 실행");

    return setUserValue(signIn(name, email));
  }

  return (
    <Router>
      <div>
        {authenticated && <Header />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feed" component={Feed} />
          <Route exact path="/map" component={MapService} />
          <Route path="/study/generate" component={StudyForm} />
          <Route path="/login" render={() => <Login signUserIn={signUserIn} />}/>
          <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </div>
    </Router>
  );
}
