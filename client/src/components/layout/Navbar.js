import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBFooter,
  MDBTooltip,
  MDBIcon
} from 'mdbreact';

import {ReactComponent as Logo } from '../../assets/logo.svg'

class Navbar extends Component {
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
          
          <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
            <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
              <Logo style={{ height: '2.5rem', width: '2.5rem' }} />
              <strong className='align-middle'>MDB React</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/css'
                  >
                    <strong>CSS</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/components'
                  >
                    <strong>Components</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/advanced'
                  >
                    <strong>Advanced</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/navigation'
                  >
                    <strong>Navigation</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/forms'
                  >
                    <strong>Forms</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/tables'
                  >
                    <strong>Tables</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/modals'
                  >
                    <strong>Modals</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/addons'
                  >
                    <strong>Addons</strong>
                  </MDBNavLink>
                </MDBNavItem>

                

                <MDBNavItem>
                  <MDBTooltip
                    placement='bottom'
                    domElement
                    style={{ display: 'block' }}
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://mdbootstrap.com/products/react-ui-kit/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                        <MDBIcon far icon='gem' />
                      </strong>
                    </a>
                    <span>PRO</span>
                  </MDBTooltip>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBTooltip
                    placement='bottom'
                    domElement
                    style={{ display: 'block' }}
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://mdbootstrap.com/docs/react/getting-started/download/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                        <MDBIcon icon='download' />
                      </strong>
                    </a>
                    <span>FREE</span>
                  </MDBTooltip>
                </MDBNavItem>
                <MDBNavItem className='mr-2'>
                  <MDBTooltip
                    placement='bottom'
                    domElement
                    style={{ display: 'block' }}
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://mdbootstrap.com/support/cat/react/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                        <MDBIcon icon='question-circle' />
                      </strong>
                    </a>
                    <span>SUPPORT</span>
                  </MDBTooltip>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
    
    </Router>
    );
  }
}

export default Navbar;