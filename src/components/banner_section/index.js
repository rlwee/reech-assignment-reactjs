import React from 'react';


import BannerContent from './banner_text';

const Banner = () => {
    return (
        <div className="banner_wrapper">

            <BannerContent/>
            <div className="banner_text">
                <p className="bannerText_format">
                    Interested in solving real problems? Join us.
                </p>
            <p className="bannerText_reech">
                Reech Careers
            </p>
            </div>
        </div>
    );
};

export default Banner;