import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import CropsPage from './pages/CropsPage';
import DeliverablesPage from './pages/DeliverablesPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/crops' component={CropsPage} />
        <Route path='/deliverable' component={DeliverablesPage} />
      </Switch>
    );
  }
}

export default Routes;
