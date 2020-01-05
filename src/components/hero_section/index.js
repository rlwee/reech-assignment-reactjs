import React from 'react';

import Feature from './feature';

import Card from 'react-bootstrap/Card'


import './hero.scss';

const Hero = () => {
    return (
        <div className='container-fluid d-flex hero' >

             <Feature/>

                <div className="slogan row justify-content-center">
                <Card bg="transparent" style={{ width: '850px', border:'none' }}>
                    <Card.Body>
                    <Card.Text className="reech_vision">
                    <span className="bold_text grow">Together, We Grow.</span><br></br>
                        Reech Philippines is an online financial fund management platform that offers diversified investment opportunities to everyJuan primarily through crowdfunding.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </div>

                
        </div>
    );
};

export default Hero;