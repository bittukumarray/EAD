import React from "react";
import logo from "../../assets/farmer-logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink,Link } from "react-router-dom";

import "./sideNav.css";

// const sidebarStyles = {
//     sidebar: {
//       width: 300
//     }
//   };

const SideNavigation = () => {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="sidebar-fixed position-fixed border-right"
    >
      <a href="#!" className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo} />
      </a>
      <MDBListGroup className="list-group-flush">
        <NavLink exact={true} to="/dashboard" activeClassName="activeClass">
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

        <Link to="/farmer-crops" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="map" className="mr-3" />
            Farmer Crops
          </MDBListGroupItem>
        </Link>

        <Link to="/add-crop" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="map" className="mr-3" />
            Farmer Crops
          </MDBListGroupItem>
        </Link>
        {/* <NavLink to="/setting" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="map" className="mr-3" />
            setting
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/password reset" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="map" className="mr-3" />
            password reset
          </MDBListGroupItem>
        </NavLink> */}
      </MDBListGroup>
    </div>
  );
};

export default SideNavigation;
