import { isPositiveInteger } from './utils/validate';
interface Robot {
    x:number
    y:number
    orientation:number
    isPlaced:boolean
}

const NORTH = 'NORTH';
const EAST = 'EAST';
const SOUTH = 'SOUTH';
const WEST = 'WEST';
const PLACE = 'PLACE';
const MOVE = 'MOVE';
const LEFT = 'LEFT';
const RIGHT = 'RIGHT';
const EXIT = 'EXIT';

const orientations = [
    NORTH,
    EAST,
    SOUTH,
    WEST
]

const moves = {
    [NORTH]: {x: 0, y: 0},
    [EAST]: {x: 1, y: 0},
    [SOUTH]: {x: 0, y: -1},
    [WEST]: {x: -1, y: 0}
}

const actionList = [
    PLACE,
    MOVE,
    LEFT,
    RIGHT,
    EXIT
];

const actionDescriptions = {
    [PLACE]: 'PLACE X,Y,O - Where X,Y are coordinates and O is orientation',
    [MOVE]: 'MOVE - Moves your robot forward one position, based on its direction, if it\'s already placed on the board',
    [LEFT]: 'LEFT - Rotates your robot 90 degrees to the left, facing a new orientation',
    [RIGHT]: 'RIGHT - Rotates your robot 90 degrees to the right, facing a new orientation',
    [EXIT]: 'EXIT - Exits the application'
}

const place = (robot:Robot, x:number, y:number, orientation:number, boardSize:number) => {
    try {
        validatePlace(x, y, orientation, boardSize);
    } catch(e) {
        throw new Error(e.message);
    }

    robot.x = x;
    robot.y = y;
    robot.orientation = orientation;
    
    if(!robot.isPlaced) {
        robot.isPlaced = true;
    }
}

const validatePlace = (x:number, y:number, orientation:number, boardSize:number):boolean => {
    if (!isPositiveInteger(x) || x > boardSize-1) {
        throw new Error(`X must be a number between 0 and ${boardSize-1}`)
    }

    if (!isPositiveInteger(y) || y > boardSize-1) {
        throw new Error(`Y must be a number between 0 and ${boardSize-1}`)
    }

    if (!isPositiveInteger(orientation) || orientation > orientations.length-1) {
        throw new Error(`O must be a number between 0 and ${orientations.length-1}`)
    }

    return true
}

const move = (robot:Robot, boardSize:number) => {
    if(!robot.isPlaced) {
        throw new Error('The robot must be on the board. Please use the \'PLACE\' command first.');
    }

    // check the objects current position and ensure the nextPosition isn't outside the bounds
    // if move is good, update objects position accordingly
    console.log("MOVE CALLED");
}

const rotate = (robot:Robot, orientation:string) => {
    if(!robot.isPlaced) {
        throw new Error('The robot must be on the board. Please use the \'PLACE\' command first.');
    }

    // if rotation is 'left', subtract 1 from orientation... if less than 0, set to orientations.length-1
    // if rotation is 'right, add 1 to orientation... if greater than orientations.length-1, set to 0
    console.log("ROTATE CALLED WITH: ", orientation);
}

const processAction = (input:string, robot:Robot, boardSize:number) => {
    const [action, args=''] = input.toUpperCase().split(' ');

    switch (action) {
        case PLACE:
            const [x, y, orientation] = args.split(',');
            try {
                place(robot, Number(x), Number(y), Number(orientation), boardSize);
            } catch(e) {
                throw new Error(e.message);
            }
            break;
        case MOVE:
            move(robot, boardSize);
            break;
        case LEFT:
            rotate(robot, LEFT);
            break;
        case RIGHT:
            rotate(robot, RIGHT);
            break;
        case EXIT:
            process.exit(0);
        default:
            throw new Error('Action not supported')
    }
}

const printInstructions = () => {
    console.log('Type any of the following actions:\n');

    for (const description in actionDescriptions) {
        console.log(actionDescriptions[description]);
    }

    console.log();
}

export { place, move, rotate, printInstructions, processAction, Robot };
