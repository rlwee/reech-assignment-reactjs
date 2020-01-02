import React from 'react';

import Button from '@material-ui/core/Button';


const buttons = (props) => {
    return (
        <Button

            className="butts"
            href = {props.link}
            variant = "contained"
            size = "small"
            style = {{
                background: props.background,
                color: props.color,
                borderRadius: '15px',
                paddingTop: '2px',
                paddingBottom: '2px'
            }}
            >
            {props.text}
        </Button>
    );
};

export default buttons;