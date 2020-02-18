import React, { Component, } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
} from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Routes from './Routes';
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
class App extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className='flyout'>
        <Navbar/>
{/* <Landing></Landing> */}
          {collapseID && overlay}
          <main style={{ marginTop: '4rem' }}>
            <Routes />
            <Route exact path="/" component={Landing}/>
            <Switch>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>

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
    );
  }
}

export default App;
