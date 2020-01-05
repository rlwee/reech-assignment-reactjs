import React from 'react';

import image_one from '../../Assets/Image 52.png';

const feature = () => {
    return (
        <div className='image_container  container-fluid d-flex'>
            <img
                src = { image_one }
                className = "icon_image"
                alt = "featured_image"
                />
        </div>
    );
};

export default feature;