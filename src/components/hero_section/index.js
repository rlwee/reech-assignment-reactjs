import React from 'react';

import Feature from './feature';

import Card from 'react-bootstrap/Card'



const Hero = () => {
    return (
        <div className='hero' >

             <Feature/>

                <div className="slogan">
                <Card bg="transparent" style={{ width: '850px', border:'none' }}>
                    <Card.Body>
                    <Card.Text className="reech_vision">
                    <span className="bold_text">Together, We Grow.</span><br></br>
                        Reech Philippines is an online financial fund management platform that offers diversified investment opportunities to everyJuan primarily through crowdfunding.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </div>

                
        </div>
    );
};

export default Hero;