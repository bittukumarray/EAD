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
  MDBBtn
} from "mdbreact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./topNav.css";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";

class TopNavigation extends Component {
  state = {
    collapse: false
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
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
                  marginTop: "0.8rem",
                  color: "#D5D8DC",
                  // fontWeight: "bold",
                  fontFamily: "rockwell",
                  fontSize: "18px"
                }}
              >
                Hello,{user && user.name}
              </span>
              <span
                className="caret"
                style={{ backgroundColor: "black" }}
              ></span>
            </p>
            <ul className="dropdown-menu" style={{ background: "#E5E8E8" }}>

              {user && user.role === "farmer" && (
                <React.Fragment>
                                <li>
                <Link
                  to="/profile"
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Courier",
                    outline: "none"
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
                        outline: "none"
                      }}
                    >
                      Dashboard
                    </Link>
                  </li>
                </React.Fragment>
              )}

              {user && user.role === "genuser" && (
                <React.Fragment>
                  {" "}
                  <li>
                <Link
                  to="/user-profile"
                  style={{
                    fontWeight: "bold",
                    fontFamily: "Courier",
                    outline: "none"
                  }}
                >
                  Profile
                </Link>
              </li>
              <div class="dropdown-divider"></div>

                  <li>
                    <Link
                      to="/user-dashboard"
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Courier",
                        outline: "none"
                      }}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Courier",
                        outline: "none"
                      }}
                    >
                      My Cart
                    </Link>
                  </li>
                </React.Fragment>
              )}
              <li>
                <Link
                  href="/logout"
                  style={{
                    color: "#A60819",
                    fontWeight: "bold",
                    outline: "none"
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
                borderRadius: "10%",
                backgroundColor: "#DF1E3E",
                color: "#D5D8DC",
                fontWeight: "bold",
                fontSize: "15px"
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
                borderRadius: "10%",
                backgroundColor: "#DF1E3E",
                color: "#D5D8DC",
                fontWeight: "bold",
                fontSize: "15px"
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
                marginTop: "0.8rem",
                color: "#D5D8DC",

                fontFamily: "rockwell",
                fontSize: "18px"
              }}
            >
              Dashboard
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="nav-item">
            <MDBNavLink
              to="/crops-info"
              style={{
                marginTop: "0.8rem",
                color: "#D5D8DC",

                fontFamily: "rockwell",
                fontSize: "18px"
              }}
            >
              CropsInfo
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="nav-item">
            <MDBNavLink
              to="/add-crop"
              style={{
                marginTop: "0.8rem",
                color: "#D5D8DC",

                fontFamily: "rockwell",
                fontSize: "18px"
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
                marginTop: "0.8rem",
                color: "#D5D8DC",

                fontFamily: "rockwell",
                fontSize: "18px"
              }}
            >
              {" "}
              Dashboard
            </MDBNavLink>
          </MDBNavItem>
        </React.Fragment>
      );
    }
    // console.log("user in topnav ", user);

    return (
      <MDBNavbar
        style={{ height: "59px", backgroundColor: "#DF1E3E  " }}
        className="flexible-navbar border navbar-dark "
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
                  fontSize: "35px",
                  fontFamily: "garamond"
                }}
              >
                Agventure
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink
                to="/"
                style={{
                  marginTop: "0.8rem",
                  color: "#D5D8DC",
                  fontFamily: "rockwell",
                  fontSize: "18px"
                }}
              >
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="nav-item">
              <MDBNavLink
                to="/catalog"
                style={{
                  marginTop: "0.8rem",
                  color: "#D5D8DC",

                  fontFamily: "rockwell",
                  fontSize: "18px"
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
                  marginTop: "0.8rem",
                  color: "#D5D8DC",

                  fontFamily: "rockwell",
                  fontSize: "18px"
                }}
              >
                {" "}
                Weather-Report
              </MDBNavLink>
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
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(TopNavigation);
