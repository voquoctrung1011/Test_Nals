import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import Home from "../container/homepage"
import Detail from "../container/detailPage"


function DashboardRouters() {
  return (
    <Switch>
      <Route path={`/`} exact component={Home} />
      <Route path={`/detail/:id`} exact component={Detail} />
    </Switch>
  );
}

export default withRouter(DashboardRouters);
