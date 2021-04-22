import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NewHome from "./theme 2.1/NewHome";
import SignUp from "./PaymentPage/signup";
import StatusPage from "./customerStatus/StatusPage";

export default (
  <Router>
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/order/:id/status" component={StatusPage} />
      <Route path="/" component={NewHome} />
    </Switch>
  </Router>
);
