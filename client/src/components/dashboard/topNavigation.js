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
} from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./topNav.css";

class TopNavigation extends Component {
  state = {
    collapse: false,
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };
  render() {
    console.log(this.props.auth);
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <React.Fragment>
        <MDBNavItem>
          <a href="#" target="_blank">
            <button type="button" class="btn btn-primary btn-md">
              logout
            </button>
          </a>
        </MDBNavItem>
      </React.Fragment>
    );

    const guestLinks = (
      <React.Fragment>
        <MDBNavItem>
          <a href="#" target="_blank">
            <button type="button" class="btn btn-primary btn-md">
              Login
            </button>
          </a>
        </MDBNavItem>
        <MDBNavItem>
          <a href="#" target="_blank">
            <button type="button" class="btn btn-primary btn-md">
              signup
            </button>
          </a>
        </MDBNavItem>
      </React.Fragment>
    );

    return (
      <MDBNavbar
        style={{ height: "59px" }}
        className="flexible-navbar border navbar-dark success-color"
        light
        expand="md"
        fixed="top"
      >
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="nav-item">
              <a
                className="nav-link"
                rel="noopener noreferrer"
                className="nav-link Ripple-parent"
                href="#"
                target="_blank"
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
              >
                History
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            {isAuthenticated ? authLinks : guestLinks}
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

export default connect(mapStateToProps, {})(TopNavigation);
