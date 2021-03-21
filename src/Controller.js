import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardLayout from "./components/dashboardLayout/DashboardLayout";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Calendar from "./screen/calendar/Calendar";
import Home from "./screen/home/Home";
import Onboarding from "./screen/onboarding/Onboarding";
import Recruitment from "./screen/recruitment/Recruitment";
import Report from "./screen/report/Report";
import Settings from "./screen/settings/Settings";

const Controller = () => {
  return (
    <Router>
      <Switch>
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/signup" render={(props) => <Signup {...props} />} /> 
        <DashboardLayout>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/recruitment"
            render={(props) => <Recruitment {...props} />}
          />
          <Route
            exact
            path="/onboarding"
            render={(props) => <Onboarding {...props} />}
          />
          <Route
            exact
            path="/report"
            render={(props) => <Report {...props} />}
          />
          <Route
            exact
            path="/calendar"
            render={(props) => <Calendar {...props} />}
          />
          <Route
            exact
            path="/settings"
            render={(props) => <Settings {...props} />}
          />
        </DashboardLayout>
      </Switch>
    </Router>
  );
};

export default Controller;
