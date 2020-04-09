import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import "./HomePage.css";
import SideNavigation from "./sideNavigation";
import TopNavigation from "./topNavigation";
// import Footer from './Footer';
// import Navbar from '../../components/layout/Navbar'

// import { Route, Switch } from 'react-router-dom';
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import CropsPage from "./pages/CropssPage";
import NotFoundPage from "./pages/NotFoundPage";
import DeliverablesPage from "./pages/DeliverablesPage";

import "./index.css";

class Dashboard extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          {/* <TopNavigation /> */}
          {/* <Navbar /> */}

          <SideNavigation />
          <main id="content" className="p-5">
            {/* <Routes /> */}

            <Switch>
              {/* <Route path="/" exact component={DashboardPage} /> */}
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/deliverable" component={DeliverablesPage} />
              <Route path="/settings" component={NotFoundPage} />
              <Route path="/passwordreset" component={NotFoundPage} />
            </Switch>
          </main>
          {/* <Footer /> */}
        </Router>
      </Fragment>
    );
  }
}

export default Dashboard;
