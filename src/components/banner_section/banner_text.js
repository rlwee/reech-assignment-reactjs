import React from 'react';

import banner_image from '../../Assets/Mask Group 43.png'


const banner_text = () => {
    return (
        <div className="banner_image_container ">
            <div className="banner_wrapper ">
                <img
                    src = {banner_image}
                    className="banner_image "
                    />
            </div>
        </div>
        
    );
};

export default banner_text;