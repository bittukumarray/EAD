import React from "react";
import logo from "../assets/farmer-logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";

import "./dashboard/sideNav.css";

// const sidebarStyles = {
//     sidebar: {
//       width: 300
//     }
//   };

const TopNavigation = () => {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="sidebar-fixed position-fixed border-right"
    >
      <a href="#!" className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo} />
      </a>
      <MDBListGroup className="list-group-flush">
        <NavLink exact={true} to="/crops-info" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="air-freshener" className="mr-3" />
            Crops
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/profile" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon fab icon="apple" className="mr-3" />
            Fertilizers
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/crops" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="bug" className="mr-3" />
            Pesticides
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/weather-report" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="chart-bar" className="mr-3" />
            Weather Report
          </MDBListGroupItem>
        </NavLink>
      </MDBListGroup>
    </div>
  );
};

export default TopNavigation;
