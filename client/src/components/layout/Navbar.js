import React, { Component, Fragment } from "react";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { MDBFooter, MDBTooltip, MDBIcon } from "mdbreact";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <MDBNavItem>
      <MDBNavLink exact to="/logout" onClick={logout}>
        <strong>Logout</strong>
      </MDBNavLink>
    </MDBNavItem>
  );
  const guestLinks = (
    <Fragment>
      <MDBNavItem>
        <Link to="/login">login</Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link to="/register">
          <strong>Register</strong>
        </Link>
      </MDBNavItem>
    </Fragment>
  );

  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
        <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
          <Logo style={{ height: "2.5rem", width: "2.5rem" }} />
          <strong className="align-middle">MDB React</strong>
        </MDBNavbarBrand>

        <MDBCollapse id="mainNavbarCollapse" navbar>
          <MDBNavbarNav right>
            {/* <MDBNavItem>
                <MDBNavLink
                  exact
                  to="/logout"
                  onClick={this.onLogoutClick.bind(this)}
                >
                  <strong>Logout</strong>
                </MDBNavLink>
              </MDBNavItem>
              
              */}
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
