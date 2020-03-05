import React, { Component } from 'react';
import { MDBNavbar, MDBMask, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBView } from 'mdbreact';

import './topNav.css';

class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <MDBNavbar style={{height:"59px"}} className="flexible-navbar border navbar-dark success-color" light expand="md"  fixed="top">
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="#">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem className="nav-item">
                            <a className="nav-link" rel="noopener noreferrer" className="nav-link Ripple-parent" href="#" target="_blank">Crops</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="#" target="_blank">Sales</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="#" target="_blank">Farmers</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer"  className="nav-link Ripple-parent" href="#" target="_blank">History</a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a href="#" target="_blank"><button type="button" class="btn btn-primary btn-md">Login</button></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a href="#" target="_blank"><button type="button" class="btn btn-primary btn-md">Sign Up</button></a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;