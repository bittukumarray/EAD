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
import {logout} from  '../../actions/auth'

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

  onlogoutclick=()=>{
    this.props.logout();
    this.props.history.push('/login');

    // console.log("logout")
  }
  render() {
    // console.log(this.props.auth);
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <React.Fragment>
        {/* <MDBNavItem>
          <h4 style={{color:"white"}}>Farmer Name</h4>
        </MDBNavItem> */}
        
        <MDBNavItem>
            <li className="dropdown mt-3">
              <p href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >
                <span style={{color:"#009900",fontWeight:"bolder",fontFamily:"Courier"}}> 
                  {this.state.name}Farmer Name
                </span> 
              <span className="caret" style={{backgroundColor:"green"}}></span></p>
              <ul className="dropdown-menu" style={{background:"#3399ff"}}>
                <li><Link to="/profile" style={{fontWeight:"bolder",fontFamily:"Courier",outline:"none"}}>Profile</Link></li>
                <li><Link to="/dashboard" style={{fontWeight:"bolder",fontFamily:"Courier",outline:"none"}}>Dashboard</Link></li>
                <li><Link href="/logout"  style={{color:"#ff3300",fontWeight:"bold",outline:"none"}} onClick={this.onlogoutclick}>Logout</Link></li>
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
            <button type="button" className="btn btn-info btn-md">
              Login
            </button>
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link to="/register">
            <button type="button" className="btn btn-info btn-md">
              signup
            </button>
          </Link>
        </MDBNavItem>
      </React.Fragment>
    );

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
                to="#"
                style={{
                  float: "left",
                  marginRight: "5rem",
                  color: "black",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                Agventure
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem >
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="nav-item">
              <MDBNavLink to="/catalog">Catalog</MDBNavLink>
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

export default connect(mapStateToProps, {logout})(TopNavigation);
