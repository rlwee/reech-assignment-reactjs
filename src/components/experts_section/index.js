import React, { Component } from 'react';

import Grace from '../../Assets/Image 53.png';
import Roy from '../../Assets/Image 54.png';
import Michie from '../../Assets/Image 55.png';
import Alveo from '../../Assets/Image 56.png';

import Button from '@material-ui/core/Button';

import fb_icon from '../../Assets/Icons/Icon awesome-facebook.jpg';
import linkedin_icon from '../../Assets/Icons/Icon awesome-linkedin.jpg';
import email_icon from '../../Assets/Icons/Icon ionic-ios-mail.jpg';


class experts extends Component {

    state = {

        images: [
                    <img alt='Grace' src={Grace}/>,
                    <img alt='Roy' src={Roy}/>,
                    <img alt='Michie' src={Michie}/>,
                    <img alt='Alveo' src={Alveo}/>
                ],

        names: ['Grace',
                'Roy',
                'Michie', 
                'Alveo'
                ],
                
        position: ['Mama',
                   'Follower',
                   'Mama2',
                   'Google'
                   ],

        desc: ['Master of ML',
               'Do You Follow?',
               'Master of Arts',
               'Master of googling'
              ],
        
        linkto:['http://expert/Grace',
                'http://expert/Roy',
                'http://expert/Michi',
                'http://expert/Alveo'
              ]
    }

    showBoxes = () => (
        this.state.images.map((box,i) => (
            <div className="experts_images" key={i}>
                <span>{this.state.images[i]}</span>
                    <div className="experts_description">
                        <span>{this.state.names[i]}</span>
                        <span className="expert_pos">{this.state.position[i]}</span>
                    </div>
                <div className="experts_more">
                    <span>{this.state.desc[i]}</span>
                </div>
                <div className="experts_icon">
                    <Button
                        href = {this.state.linkto[i]}
                        className="expert_button first_button"
                        >
                        <img src={linkedin_icon}/> 
                    </Button>
                    <Button
                        href = {this.state.linkto[i]}
                        className="expert_button"
                        >
                        <img src={email_icon}/>
                    </Button>
                    <Button
                        href = {this.state.linkto[i]}
                        className="expert_button last_button"
                        >
                        <img src={fb_icon}/> 
                    </Button>
                </div>
            </div>
        ))
    )

    render() {
        return (
            <div className="experts_background" >
                <div className="experts_wrapper">
                    <h2>Team of <span className="blue_text">Experts</span></h2>
                        <p>Bellachiao chiao chiao</p>
                    <div className="experts_wrapper_container">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default experts;