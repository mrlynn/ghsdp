import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from './components/App/App';
import NotFound from "./components/App/NotFound";
import Home from "./components/Home/Home";

render(
  // <Router>
  //   {/* <App> */}
  //     <Switch>
  //       <Route exact path="/" component={Home}/>
  //       <Route component={NotFound}/>
  //     </Switch>
  //   {/* </App> */}
  // </Router>
  <Router>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>,
  document.getElementById("app")
);
