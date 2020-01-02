import React from 'react';



import LeftContent from './left_footer';

import RightContent from './right_footer';

const Footer = () => {
    return (
        <div className="footer_wrapper">
            <LeftContent/>
            <RightContent/>
        </div>
    );
};

export default Footer;