import React from 'react';
import PropTypes from 'prop-types'

import Sky from "./Sky";
import Ground from "./Ground";
import CannonPipe from './CannonPipe'
import CannonBase from './CannonBase'
import CannonBall from "./CannonBall";

const Canvas = (props) => {

    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];


    return (
        <svg
            id="aliens-go-home"
            preserveAspectRatio="xMaxYMax meet"
            viewBox={viewBox}
            onMouseMove={props.trackMouse}
        >
            <Sky/>
            <Ground/>
            <CannonPipe rotation={props.angle} />
            <CannonBase />
            <CannonBall position={{x:0,y:-100}}/>


        </svg>
    );

};


Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired,
};

export default Canvas;