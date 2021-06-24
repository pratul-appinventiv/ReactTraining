import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Users from "./Users";
import UserDetails from "./UserDetails";

function Assignment10() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/"} component={Login} exact />
          <Route path={"/user"} component={Users} exact />
          <Route path={"/user/details:id"} component={UserDetails} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default Assignment10;
