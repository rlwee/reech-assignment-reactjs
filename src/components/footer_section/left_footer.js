import React from 'react';

import reech_logo from '../../Assets/logov4.png';

import Card from 'react-bootstrap/Card'

const left_footer = () => {
    return (
        <div className="Footer_left">
            <img
                src={reech_logo}
                className="footer_logo"
                />
            
            <div>
                <Card bg="transparent" style={{ width: '850px', border:'none' }}>
                    <Card.Body>
                    <Card.Text className="footer_vision">
                        Reech Philippines is an online financial fund management platform that offers diversified 
                        investment opportunities to everyJuan primarily through crowdfunding.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="copyright">
                Copyright © 2019 Reech Philippines Corp. | Davao City.PH
            </div>

        </div>
    );
};

export default left_footer;