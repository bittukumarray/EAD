
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import "./HomePage.css";
import SideNavigation from './sideNavigation';
import TopNavigation from './topNavigation';
import Footer from './Footer';


// import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import NotFoundPage from './pages/NotFoundPage';
import MapsPage from './pages/MapsPage'


import './index.css';

class Dashboard extends React.Component {

  render() {
    return (
      <Fragment>

<Router>

     
        <TopNavigation />
        <SideNavigation />
        <main id="content" className="p-5">
        {/* <Routes /> */}
        
        <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
         <Route path='/tables' component={TablesPage} />
          <Route path='/maps' component={MapsPage} /> 
        <Route path='/404' component={NotFoundPage} /> 
      </Switch>
        
        
        </main>
        <Footer />
        </Router>
      </Fragment>
    );
  }
}

export default Dashboard;


