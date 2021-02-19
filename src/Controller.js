import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DashboardLyout from './components/dashboardLayout/Dashboard';



const Controller = () => {
    return (
        <Router>
            <DashboardLyout />
            <Switch>
                <Route />
            </Switch>
        </Router>
    )
}

export default Controller;