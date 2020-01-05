import React from 'react';

import Leftcontent from './left_body';
import Rightcontent from './right_body';

import Media from 'react-bootstrap/Media'

import Illustration from '../../Assets/Illustration.jpg';

import './body.scss';

const Body = () => {
    return (
        
        <div className="body_wrapper container-fluid d-flex p-2">
            {/* <Leftcontent/>
            <Rightcontent/> */}

            <Media>
                <Media.Body>
                    
                <h2 className="body_header ">It started with a <span className="blue_text">question.</span></h2>
                    
                <div className="body_description row justify-content-center">
                <p>"Why cant we have a safer way to hail a ride?" <br></br>
                    "Can't we give drivers better working conditions" <br></br>
                    "What if we could make life a little bit easier" <br></br>
                    Okay, it started with several questions. Those questions led to a group of incredibly 
                    ambitious (and incredibly optimistic) friends starting this company in a tiny rented  
                    storage space somehwere in Kuala Lumpur, Malaysia.
                    That was in 2012.
                    Today, that tiny company has turned into Grab, Southeast Asia's largest mobile 
                    technology company that connects millions of consumers to millions of drivers, 
                    merchants, and businesses. Grab is taing on the largest problems that affect the 
                    region, including access inequality, outdated infrastructure, and income disparity. 
                    Just like every single Southeast Asian, we're still incredibly ambitious. We're still 
                    questioning those everyday limitations. And we're still incredibly optimistic.
                </p>

                </div>

                </Media.Body>
                <div>
                <img
                    className="body_image"
                    src={Illustration}
                    alt="Generic placeholder"
                />
                </div>
                </Media>
        </div>
    );
};

export default Body;