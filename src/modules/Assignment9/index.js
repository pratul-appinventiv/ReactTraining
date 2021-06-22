import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import CardDetails from "./components/CardDetails";

function Assignment9() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={"/"} component={Login} exact />
          <Route path={"/dashboard"} component={Dashboard} exact />
          <Route path={"/dashboard/details:id"} component={CardDetails} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default Assignment9;
