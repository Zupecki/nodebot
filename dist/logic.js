"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintInstructions = exports.PrintMenu = exports.Rotate = exports.Move = exports.Place = void 0;
const orientations = [
    "NORTH",
    "EAST",
    "SOUTH",
    "WEST"
];
const moves = {
    "NORTH": { x: 0, y: 0 },
    "EAST": { x: 1, y: 0 },
    "SOUTH": { x: 0, y: -1 },
    "WEST": { x: -1, y: 0 }
};
const actionList = [
    "PLACE",
    "MOVE",
    "LEFT",
    "RIGHT",
    "EXIT"
];
const actions = {
    "PLACE": {
        action: () => Place,
        description: 'PLACE X,Y,O - Where X,Y are coordinates and O is orientation'
    },
    "MOVE": {
        action: () => Move,
        description: 'MOVE - Moves your robot forward one position, based on its direction, if it\'s already placed on the board'
    },
    "LEFT": {
        action: (object) => Rotate(object, 'left'),
        description: 'LEFT - Rotates your robot 90 degrees to the left, facing a new orientation',
    },
    "RIGHT": {
        action: (object) => Rotate(object, 'right'),
        description: 'RIGHT - Rotates your robot 90 degrees to the right, facing a new orientation',
    },
    "EXIT": {
        action: () => process.exit(0),
        description: 'EXIT - Exits the application',
    }
};
const Place = (boardSize, object, options) => {
    // check if option position exists inside of board
    // check if direction exists inside directions
    // if both are good, update robot
};
exports.Place = Place;
const Move = (boardSize, object) => {
    // check the objects current position and ensure the nextPosition isn't outside the bounds
    // if move is good, update objects position accordingly
};
exports.Move = Move;
const Rotate = (object, rotation) => {
    // if rotation is 'left', subtract 1 from orientation... if less than 0, set to orientations.length-1
    // if rotation is 'right, add 1 to orientation... if greater than orientations.length-1, set to 0
};
exports.Rotate = Rotate;
const PrintMenu = () => {
    console.log(`PLACE X,Y,D\n`, `MOVE\n`, `LEFT\n`, `RIGHT\n`, `EXIT\n`);
};
exports.PrintMenu = PrintMenu;
const PrintInstructions = () => {
    console.log('Type any of the following actions:\n');
    actionList.map((actionItem, index) => {
        console.log(`${actions[actionItem].description}${index === actionList.length - 1 ? '\n' : ''}`);
    });
};
exports.PrintInstructions = PrintInstructions;
//# sourceMappingURL=logic.js.map