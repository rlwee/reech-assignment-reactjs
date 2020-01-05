import React, { Component } from 'react';

import './header.scss';

import AppBar from '@material-ui/core/AppBar';
import Button from './buttons';

import reech_logo from '../../Assets/logov4.png';

import {Navbar, Nav} from 'react-bootstrap'


class header extends Component {

    state = {
        headerShow: false,
        hidden: false
    }


    render() {
        return (
        <div className="header_nav ">
            <Navbar expand="lg" bg="light" variant="light" className='header_appbar' >
                <Navbar.Brand href="#home"><img src={reech_logo} className="logoImage" alt="REECH" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto poppin">
                            <Nav.Link href="#" className="links">
                                    <strong>HOME</strong>
                            </Nav.Link>
                            <Nav.Link  href="#" className="links">
                                    <strong>EXPLORE</strong>
                            </Nav.Link>
                            <Nav.Link  href="#" className="links">
                                    <strong>PORTFOLIO</strong>
                            </Nav.Link>
                            <Nav.Link  href="#" className="camp_button">
                                    <Button text="CREATE CAMPAIGN" background="orange" color="white"/>
                            </Nav.Link>
                            <Nav.Link  href="#" className="vl login_button">
                                   <Button text="login" background="cornflowerblue" color="white"/>
                            </Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}

export default header;