// import React, { Fragment } from "react";

// import {
//   MDBNavbar,
//   MDBNavbarNav,
//   MDBNavItem,
//   MDBNavLink,
//   MDBCollapse
// } from "mdbreact";
// import { BrowserRouter as Router, Link } from "react-router-dom";

// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { logout } from "../../actions/auth";

// const Navbar = ({ auth: { isAuthenticated }, logout }) => {
//   const authLinks = (
//     <MDBNavItem>
//       <MDBNavLink exact to="/logout" onClick={logout}>
//         <strong >Logout</strong>
//       </MDBNavLink>
//     </MDBNavItem>
//   );
//   const guestLinks = (
//     <Fragment>
//       <MDBNavItem>
//         <Link
//           to="/login"
//           style={{ color: "black", fontWeight: "bolder", fontSize: "20px" }}
//         >
//           Login
//         </Link>
//       </MDBNavItem>
//       <MDBNavItem>
//         <Link
//           to="/register"
//           style={{
//             color: "black",
//             fontWeight: "bolder",
//             fontSize: "20px",
//             marginLeft: "1rem"
//           }}
//         >
//           Sign Up
//         </Link>

//         {/* <a href="register">register</a> */}
//       </MDBNavItem>
//     </Fragment>
//   );

//   return (
//     <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
//       {/* <a href="/" className="py-0 font-weight-bold"> */}
//       <Link
//         to="/login"
//         style={{ color: "black", fontWeight: "bolder", fontSize: "20px" }}
//       >
//         Agventure
//       </Link>

//       {/* </a> */}

//       <MDBCollapse id="mainNavbarCollapse" navbar>
//         <MDBNavbarNav right>
//           <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
//         </MDBNavbarNav>
//       </MDBCollapse>
//     </MDBNavbar>
//   );
// };
// Navbar.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { logout })(Navbar);
