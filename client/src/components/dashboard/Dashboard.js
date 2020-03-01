
import React, { Fragment } from "react";
// import "./HomePage.css";
import SideNavigation from './sideNavigation';
import TopNavigation from './topNavigation';
import Footer from './Footer';
import './index.css';

class Dashboard extends React.Component {

  render() {
    return (
      <Fragment>
     
        <TopNavigation />
        <SideNavigation />
        <main id="content" className="p-5">
        {/* <Routes /> */}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Dashboard;


