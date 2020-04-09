import React, { Component } from "react";
import {
  MDBNavbar,
  MDBMask,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBView,
<<<<<<< HEAD
  MDBBtn
} from "mdbreact";

import "./topNav.css";

class TopNavigation extends Component {
  state = {
    collapse: false
=======
} from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./topNav.css";
import { Link } from "react-router-dom";

class TopNavigation extends Component {
  state = {
    collapse: false,
>>>>>>> bbdadeb7a22371b50d3d64bcd2d30b059b8b2be3
  };

  onClick = () => {
    this.setState({
<<<<<<< HEAD
      collapse: !this.state.collapse
=======
      collapse: !this.state.collapse,
>>>>>>> bbdadeb7a22371b50d3d64bcd2d30b059b8b2be3
    });
  };

  toggle = () => {
    this.setState({
<<<<<<< HEAD
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  render() {
    return (
      <MDBNavbar
        style={{ height: "59px" }}
        className="flexible-navbar border navbar-dark  teal lighten-1"
=======
      dropdownOpen: !this.state.dropdownOpen,
    });
  };
  render() {
    console.log(this.props.auth);
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <React.Fragment>
        <MDBNavItem>
          <Link href="/logout" target="_blank">
            <button type="button" class="btn btn-primary btn-md">
              logout
            </button>
          </Link>
        </MDBNavItem>
      </React.Fragment>
    );

    const guestLinks = (
      <React.Fragment>
        <MDBNavItem>
          <Link to="/login">
            <button type="button" class="btn btn-primary btn-md">
              Login
            </button>
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link to="/register">
            <button type="button" class="btn btn-primary btn-md">
              signup
            </button>
          </Link>
        </MDBNavItem>
      </React.Fragment>
    );

    return (
      <MDBNavbar
        style={{ height: "59px" }}
        className="flexible-navbar border navbar-dark success-color"
>>>>>>> bbdadeb7a22371b50d3d64bcd2d30b059b8b2be3
        light
        expand="md"
        fixed="top"
      >
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav left>
<<<<<<< HEAD
            <MDBNavItem>
              <MDBNavLink
                to="#"
                style={{
                  float: "left",
                  marginRight: "5rem",
                  color: "black",
                  fontWeight: "bolder",
                  fontSize: "20px"
                }}
              >
                Agventure
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink
                to="#"
                style={{ color: "#212121", fontWeight: "bolder" }}
              >
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="nav-item">
              <a
                className="nav-link"
                rel="noopener noreferrer"
                className="nav-link Ripple-parent"
                href="#"
                target="_blank"
                style={{ color: "#212121", fontWeight: "bolder" }}
              >
                Crops
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                rel="noopener noreferrer"
                className="nav-link Ripple-parent"
                href="#"
                target="_blank"
                style={{ color: "#212121", fontWeight: "bolder" }}
              >
                Sales
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                rel="noopener noreferrer"
                className="nav-link Ripple-parent"
                href="#"
                target="_blank"
                style={{ color: "#212121", fontWeight: "bolder" }}
              >
                Farmers
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                rel="noopener noreferrer"
                className="nav-link Ripple-parent"
                href="#"
                target="_blank"
                style={{ color: "#212121", fontWeight: "bolder" }}
              >
                History
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem
              style={{
                marginTop: "0.8rem",
                fontSize: "20px",
                marginRight: "2rem",
                fontWeight: "bolder"
              }}
            >
              Hello, Wilson
            </MDBNavItem>
            <MDBNavItem
              style={{
                marginTop: "6px",
                fontSize: "25px",
                marginRight: "1rem",
                fontWeight: "bolder"
              }}
            >
              Logout
            </MDBNavItem>
=======
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="nav-item">
              <MDBNavLink to="/crops">Crops</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="nav-item">
              <MDBNavLink to="/sales">Sales</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="nav-item">
              <MDBNavLink to="/dashboard"> Farmer Dashboard</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="nav-item">
              <MDBNavLink to="/weather-report"> Weather-Report</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            {isAuthenticated ? authLinks : guestLinks}
>>>>>>> bbdadeb7a22371b50d3d64bcd2d30b059b8b2be3
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
TopNavigation.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

<<<<<<< HEAD
export default TopNavigation;
=======
export default connect(mapStateToProps, {})(TopNavigation);
>>>>>>> bbdadeb7a22371b50d3d64bcd2d30b059b8b2be3
