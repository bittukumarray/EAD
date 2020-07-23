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
  MDBBtn,
} from "mdbreact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./topNav.css";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";

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

  onlogoutclick = () => {
    this.props.logout();
    // this.props.history.push('/login');

    // console.log("logout")
  };
  render() {
    // console.log(this.props.auth);
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <React.Fragment>
        {/* <MDBNavItem>
          <h4 style={{color:"white"}}>Farmer Name</h4>
        </MDBNavItem> */}

        <MDBNavItem>
          <li className="dropdown mt-3">
            <p
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span
                style={{
                  color: "0E0401",
                  fontWeight: "bold",
                  fontFamily: "courier",
                }}
              >
                {this.state.name}Farmer Name
              </span>
              <span
                className="caret"
                style={{ backgroundColor: "black" }}
              ></span>
            </p>
            <ul className="dropdown-menu" style={{ background: "#E5E8E8" }}>
              <li>
                <Link
                  to="/profile"
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Courier",
                    outline: "none",
                  }}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Courier",
                    outline: "none",
                  }}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/logout"
                  style={{
                    color: "#A60819",
                    fontWeight: "bold",
                    outline: "none",
                  }}
                  onClick={this.onlogoutclick}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </MDBNavItem>
        <MDBNavItem>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          {/* <Link href="/logout" target="_blank">
            <button type="button" className="btn btn-info btn-md">
              logout
            </button>
          </Link> */}
        </MDBNavItem>
      </React.Fragment>
    );

    const guestLinks = (
      <React.Fragment>
        <MDBNavItem>
          <Link to="/login">
            <button
              type="button"
              className="btn btn-md"
              style={{
                backgroundColor: "#D5D8DC",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Login
            </button>
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link to="/register">
            <button
              type="button"
              className="btn btn-md"
              style={{
                backgroundColor: "#D5D8DC",
                color: "black",
                fontWeight: "bold",
              }}
            >
              signup
            </button>
          </Link>
        </MDBNavItem>
      </React.Fragment>
    );

    let dashboardLink = "";
    // let dashboardLink1 = "";
    // if (user && user.role === "farmer") {
    //   dashboardLink1 = (
    //     <MDBNavItem className="nav-item">
    //       <MDBNavLink
    //         to="/dashboard"
    //         style={{
    //           color: "#D5D8DC",
    //           // fontWeight: "bold",
    //           fontFamily: "rockwell",
    //           fontSize: "17px"
    //         }}
    //       >
    //         {" "}
    //         AddCrops
    //       </MDBNavLink>
    //     </MDBNavItem>
    //   );
    // }
    if (user && user.role === "farmer") {
      dashboardLink = (
        <React.Fragment>
          <MDBNavItem className="nav-item">
            <MDBNavLink
              to="/dashboard"
              style={{
                color: "#D5D8DC",
                // fontWeight: "bold",
                fontFamily: "rockwell",
                fontSize: "17px",
              }}
            >
              Dashboard
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="nav-item">
            <MDBNavLink
              to="/crops-info"
              style={{
                color: "#D5D8DC",
                // fontWeight: "bold",
                fontFamily: "rockwell",
                fontSize: "17px",
              }}
            >
              CropsInfo
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="nav-item">
            <MDBNavLink
              to="/add-crop"
              style={{
                color: "#D5D8DC",
                // fontWeight: "bold",
                fontFamily: "rockwell",

                fontSize: "17px",
              }}
            >
              {" "}
              Add Crops
            </MDBNavLink>
          </MDBNavItem>
        </React.Fragment>
      );
    } else if (user && user.role === "genuser") {
      dashboardLink = (
        <React.Fragment>
          <MDBNavItem className="nav-item">
            <MDBNavLink
              to="/user-dashboard"
              style={{
                color: "#D5D8DC",
                // fontWeight: "bold",
                fontFamily: "rockwell",
                fontSize: "17px",
              }}
            >
              {" "}
              Dashboard
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="nav-item">
            <MDBNavLink
              to="/cart"
              style={{
                color: "#D5D8DC",
                // fontWeight: "bold",
                fontFamily: "rockwell",
                fontSize: "17px",
              }}
            >
              {" "}
              My cart
            </MDBNavLink>
          </MDBNavItem>
        </React.Fragment>
      );
    }
    // console.log("user in topnav ", user);

    return (
      <MDBNavbar
        style={{ height: "59px" }}
        className="flexible-navbar border navbar-dark  teal lighten-1"
        light
        expand="md"
        fixed="top"
      >
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink
                to="/"
                style={{
                  float: "left",
                  marginRight: "5rem",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "25px",
                  fontFamily: "garamond",
                }}
              >
                Agventure
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink
                to="/"
                style={{
                  color: "#D5D8DC",
                  // fontWeight: "bold",
                  fontFamily: "rockwell",
                  fontSize: "17px",
                }}
              >
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="nav-item">
              <MDBNavLink
                to="/catalog"
                style={{
                  color: "#D5D8DC",
                  // fontWeight: "bold",
                  fontFamily: "rockwell",
                  fontSize: "17px",
                }}
              >
                Catalog
              </MDBNavLink>
            </MDBNavItem>

            {dashboardLink}

            <MDBNavItem className="nav-item">
              <MDBNavLink
                to="/weather-report"
                style={{
                  color: "#D5D8DC",
                  // fontWeight: "bold",
                  fontFamily: "rockwell",
                  fontSize: "17px",
                }}
              >
                {" "}
                Weather-Report
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            {/* <MDBNavItem
              style={{
                marginTop: "0.8rem",
                fontSize: "20px",
                marginRight: "2rem",
                fontWeight: "bolder",
              }}
            >
              Hello, Wilson
            </MDBNavItem>
            <MDBNavItem
              style={{
                marginTop: "6px",
                fontSize: "25px",
                marginRight: "1rem",
                fontWeight: "bolder",
              }}
            >
              Logout
            </MDBNavItem> */}
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

export default connect(mapStateToProps, { logout })(TopNavigation);
