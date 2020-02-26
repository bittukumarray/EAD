import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon
} from "mdbreact";
// import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Routes";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import CompanyRegister from "./components/auth/CompanyRegister";
import CompanyLogin from "./components/auth/CompanyLogin";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser, loadCompanyUser } from "./actions/auth";
// import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
// import companyRegister from "./components/auth/companyRegister";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  //it is like component did mount
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
      // store.dispatch(loadCompanyUser());
    }
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className="flyout">
          <Navbar />

          <main style={{ marginTop: "4rem" }}>
            <Routes />
            <Route exact path="/" component={Landing} />
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/company-register"
                component={CompanyRegister}
              />
              <Route exact path="/company-login" component={CompanyLogin} />
            </Switch>
            {/* routes here */}
          </main>
          {/* <MDBFooter color='indigo'>
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a href='https://www.MDBootstrap.com'> MDBootstrap.com </a>
            </p>
          </MDBFooter> */}
        </div>
      </Router>
    </Provider>
  );
};

export default App;
