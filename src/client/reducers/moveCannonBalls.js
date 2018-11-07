import { calculateNextPosition } from '../utils/formulas';
import {flyingObjectsStarterYAxis, gameHeight, gameWidth} from "../utils/constants";


const moveBalls = cannonBalls => (
    cannonBalls
        .filter(cannonBall => (
            cannonBall.position.y > flyingObjectsStarterYAxis && cannonBall.position.x > -gameWidth && cannonBall.position.x < gameWidth
        ))
        .map((cannonBall) => {
            const { x, y } = cannonBall.position;
            const { angle } = cannonBall;
            return {
                ...cannonBall,
                position: calculateNextPosition(x, y, angle, 1),
            };
        })
);

export default moveBalls;