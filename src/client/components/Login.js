import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
    const button = {
        x: -300, // half width
        y: -500, // minus means up (above 0)
        width: 600,
        height: 100,
        style: {
            fill: 'transparent',
            cursor: 'pointer',
        },
        onClick: props.authenticate,
    };

    const text = {
        textAnchor: 'middle', // center
        x: 0, // center relative to X axis
        y: -440, // 440 up
        style: {
            fontFamily: '"Joti One", cursive',
            fontSize: 45,
            fill: '#e3e3e3',
            cursor: 'pointer',
        },
        onClick: props.authenticate,
    };

    const foreignObject = {
        x: 0,
        y: -400,
        width: 100,
        height: 100,

    }

    return (
        <g filter="url(#shadow)">
            <rect {...button} />
            <text {...text}>
                Insert your name!
            </text>
            <foreignObject {...foreignObject}>
                <input ></input>
            </foreignObject>
        </g>
    );
};

Login.propTypes = {
    authenticate: PropTypes.func.isRequired,
};

export default Login;