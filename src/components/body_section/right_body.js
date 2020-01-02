import React from 'react';

import Illustration from '../../Assets/Illustration.jpg';

const right_body = () => {
    return (
        <div className='right_wrapper'>
            <img
                src = {Illustration}
                className = 'body_image'
                alt='REECH' 
                />
        </div>
    );
};

export default right_body;