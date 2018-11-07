import {
    gameWidth, createInterval, flyingObjectsStarterYAxis, maxFlyingObjects} from '../utils/constants';


function getNewFlyingObject() {
    const id = (new Date()).getTime();
    const rand = Math.random();
    const position = (rand * gameWidth*2) - (gameWidth);
    const newFlyingObject = {
        position: {x: position, y: flyingObjectsStarterYAxis},
        createdAt: id,
        id: id,
    };
    return newFlyingObject;
}

function shouldCreateNewObject(state) {
    const now = (new Date()).getTime();
    const {lastObjectCreatedAt, flyingObjects} = state.gameState;
    const shouldCreateNewObject = (
        now - (lastObjectCreatedAt).getTime() > createInterval && flyingObjects.length < maxFlyingObjects
    );
    return shouldCreateNewObject;
}


export default (state) => {
    if (!state.gameState.started) return state; // game not running

    if(!shouldCreateNewObject(state)) return state;

    const newFlyingObject = getNewFlyingObject();

    return {
        ...state,
        gameState: {
            ...state.gameState,
            flyingObjects: [
                ...state.gameState.flyingObjects,
                newFlyingObject
            ],
            lastObjectCreatedAt: new Date(),
        }
    };

};