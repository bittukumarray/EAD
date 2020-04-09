import React from "react";
import logo from "../../assets/farmer-logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";

import "./sideNav.css";

// const sidebarStyles = {
//     sidebar: {
//       width: 300
//     }
//   };

<<<<<<< HEAD
const TopNavigation = () => {
=======
const SideNavigation = () => {
>>>>>>> bbdadeb7a22371b50d3d64bcd2d30b059b8b2be3
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="sidebar-fixed position-fixed border-right"
    >
      <a href="#!" className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo} />
      </a>
      <MDBListGroup className="list-group-flush">
<<<<<<< HEAD
        <NavLink exact={true} to="/" activeClassName="activeClass">
=======
        <NavLink exact={true} to="/dashboard" activeClassName="activeClass">
>>>>>>> bbdadeb7a22371b50d3d64bcd2d30b059b8b2be3
          <MDBListGroupItem>
            <MDBIcon icon="chart-pie" className="mr-3" />
            Dashboard
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/profile" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="user" className="mr-3" />
            Profile
          </MDBListGroupItem>
        </NavLink>
<<<<<<< HEAD
        <NavLink to="/crops" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="apple-alt" />
            Crops
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/deliverable" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="chart-bar" />
            Weather Report
=======

        <NavLink to="/deliverable" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="map" className="mr-3" />
            deliverable
>>>>>>> bbdadeb7a22371b50d3d64bcd2d30b059b8b2be3
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/setting" activeClassName="activeClass">
          <MDBListGroupItem>
<<<<<<< HEAD
            <MDBIcon icon="wrench" />
            Settings
=======
            <MDBIcon icon="map" className="mr-3" />
            setting
>>>>>>> bbdadeb7a22371b50d3d64bcd2d30b059b8b2be3
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/password reset" activeClassName="activeClass">
          <MDBListGroupItem>
<<<<<<< HEAD
            <MDBIcon icon="unlock" />
            Password Reset
=======
            <MDBIcon icon="map" className="mr-3" />
            password reset
>>>>>>> bbdadeb7a22371b50d3d64bcd2d30b059b8b2be3
          </MDBListGroupItem>
        </NavLink>
      </MDBListGroup>
    </div>
  );
};

<<<<<<< HEAD
export default TopNavigation;
=======
export default SideNavigation;
>>>>>>> bbdadeb7a22371b50d3d64bcd2d30b059b8b2be3
