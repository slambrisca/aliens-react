import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './components/Canvas';

import './app.css';



class App extends Component {

    constructor(props) {
        super(props);
        this.shoot = this.shoot.bind(this);

    }


    componentDidMount() {
        const self = this;
        setInterval(() => {
            self.props.moveObjects(self.canvasMousePosition);
        }, 50);

        window.onresize = () => {
            const cnv = document.getElementById('aliens-go-home');
            cnv.style.width = `${window.innerWidth}px`;
            cnv.style.height = `${window.innerHeight}px`;
        };
        window.onresize();
    }

    trackMouse(event) {
        this.canvasMousePosition = getCanvasPosition(event);
    }

    shoot() {
        this.props.shoot(this.canvasMousePosition);
    }

    render() {
        return (
            <Canvas
                angle={this.props.angle}
                trackMouse={event => (this.trackMouse(event))}
                startGame={this.props.startGame}
                gameState={this.props.gameState}
                shoot={this.shoot}

            />
        );
    }
}

App.propTypes = {
    angle: PropTypes.number.isRequired,
    moveObjects: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
        flyingObjects: PropTypes.arrayOf(PropTypes.shape({
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    shoot: PropTypes.func.isRequired,

};

export default App;