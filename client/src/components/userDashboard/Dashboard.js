import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import "./HomePage.css";
import SideNavigation from "./sideNavigation";

import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import Cart from "../cart/cart";
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
              {/* Famer Side Nav */}
              <Route path="/user-dashboard" component={DashboardPage} />
              <Route path="/user-profile" component={ProfilePage} />
              <Route path="/cart" component={Cart} />

              {/* <Route path="/farmer-crops" component={Crops} /> */}

              {/* <Route exact path="/farmer-crop/:id" component={Crop} /> */}
            </Switch>
          </main>
          {/* <Footer /> */}
        </Router>
      </Fragment>
    );
  }
}

export default Dashboard;
