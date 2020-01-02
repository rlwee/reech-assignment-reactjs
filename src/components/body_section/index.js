import React from 'react';

import Leftcontent from './left_body';
import Rightcontent from './right_body';

import Media from 'react-bootstrap/Media'

import Illustration from '../../Assets/Illustration.jpg';

const Body = () => {
    return (
        <div className="body_wrapper">
            {/* <Leftcontent/>
            <Rightcontent/> */}


            <Media>
                <Media.Body>
                    
                <h2 className="body_header">It started with a <span className="blue_text">question.</span></h2>
                    
                <div className="body_description">
                <p>"Why cant we have a safer way to hail a ride?" <br></br>
                    "Can't we give drivers better working conditions" <br></br>
                    "What if we could make life a little bit easier"
                </p>

                <p>
                    Okay, it started with several questions. Those questions led to a group of incredibly <br></br>
                    ambitious (and incredibly optimistic) friends starting this company in a tiny rented  <br></br>
                    storage space somehwere in Kuala Lumpur, Malaysia.
                </p>

                <p>
                    That was in 2012.
                </p>

                <p>
                    Today, that tiny company has turned into Grab, Southeast Asia's largest mobile <br></br>
                    technology company that connects millions of consumers to millions of drivers, <br></br>
                    merchants, and businesses. Grab is taing on the largest problems that affect the <br></br>
                    region, including access inequality, outdated infrastructure, and income disparity. <br></br>
                </p>

                <p>
                    Just like every single Southeast Asian, we're still incredibly ambitious. We're still <br></br>
                    questioning those everyday limitations. And we're still incredibly optimistic.
                </p>

                </div>

                </Media.Body>
                <img
                    className="body_image"
                    src={Illustration}
                    alt="Generic placeholder"
                />
                </Media>

        </div>
    );
};

export default Body;