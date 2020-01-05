import React from 'react';


import BannerContent from './banner_text';

import './banner.scss';


const Banner = () => {
    return (
        <div className="banner_wrapper container-fluid">

            <BannerContent/>
            <div className="banner_text">

                    <p className="bannerText_format row justify-content-center">
                        Interested in solving real problems? Join us.
                    </p>

                    <p className="bannerText_reech row justify-content-center">
                    Reech Careers
                    </p>

            </div>

        </div>
    );
};

export default Banner;