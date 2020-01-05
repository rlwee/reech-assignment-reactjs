import React from 'react';



import LeftContent from './left_footer';

import RightContent from './right_footer';

import './footer.scss';

const Footer = () => {
    return (
        <div className="footer_wrapper container-fluid ">
            <LeftContent/>
            <RightContent/>
        </div>
    );
};

export default Footer;