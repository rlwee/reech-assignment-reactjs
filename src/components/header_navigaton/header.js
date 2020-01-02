import React, { Component } from 'react';


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
            // <AppBar className="nav header_appbar">

            //     <nav className="navbar navbar-expand-lg fixed-top justify-content-between">
                    
            //         <div className="navbar-header">    
            //             <a className="navbar-brand" href="#"><img src={reech_logo} className="logoImage" alt="REECH" /></a>
            //                 {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //                     <span className="navbar-toggler-icon"></span>
            //                 </button> */}
            //         </div>

            //         <div className="collapse navbar-collapse">
            //             <ul className="nav navbar-nav ml-auto">
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#"><strong>HOME</strong></a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#"><strong>EXPLORE</strong></a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#"><strong>PORTFOLIO</strong></a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link camp_button" href="#"><Button text="CREATE CAMPAIGN" background="orange" color="white"/></a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link vl login_button" href="#"><Button text="login" background="cornflowerblue" color="white"/></a>
            //             </li>
            //             </ul>
            //         </div>
                    
            //     </nav>

            // </AppBar>
            <Navbar expand="lg" bg="light" variant="light" className='header_appbar' >
                <Navbar.Brand href="#home"><img src={reech_logo} className="logoImage" alt="REECH" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#">
                                    <strong>HOME</strong>
                            </Nav.Link>
                            <Nav.Link  href="#">
                                    <strong>EXPLORE</strong>
                            </Nav.Link>
                            <Nav.Link  href="#">
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
            
        );
    }
}

export default header;