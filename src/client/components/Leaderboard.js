import React from 'react';
import PropTypes from 'prop-types';
import Rank from "./Rank";

const Leaderboard = (props) => {
    const style = {
        fill: 'transparent',
        stroke: 'black',
        strokeDasharray: '15',
    };

    const leaderboardTitle = {
        fontFamily: '"Joti One", cursive',
        fontSize: 50,
        fill: '#88da85',
        cursor: 'default',
    };

    let leaderboard = props.leaderboard || [];
    leaderboard = leaderboard.sort((prev, next) => {
        return  next.maxScore - prev.maxScore;
    }).map((member, index) => ({
        ...member,
        rank: index + 1
    })).slice(0,4);

    return (
        <g>
            <text filter="url(#shadow)" style={leaderboardTitle} x="-150" y="-630">Leaderboard</text>
            <rect style={style} x="-350" y="-600" width="700" height="330" />
            {
                leaderboard.map((player, idx) => {
                    const position = {
                        x: -100,
                        y: -530 + (70 * idx)
                    };
                    return <Rank key={player.id} player={player} position={position}/>
                })
            }
        </g>
    );
};

Leaderboard.propTypes = {
    leaderboard: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        maxScore: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        ranking: PropTypes.number,
    })),
};

Leaderboard.defaultProps = {
    leaderboard: null,
};

export default Leaderboard;