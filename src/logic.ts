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
const REPORT = 'REPORT';
const EXIT = 'EXIT';

const orientations = [
    NORTH,
    EAST,
    SOUTH,
    WEST
]

const moves = {
    [NORTH]: {x: 0, y: 1},
    [EAST]: {x: 1, y: 0},
    [SOUTH]: {x: 0, y: -1},
    [WEST]: {x: -1, y: 0}
}

const actionDescriptions = {
    [PLACE]: '\x1b[36m'+'PLACE X,Y,O'+'\x1b[0m'+' - Where X,Y are coordinates and O is orientation',
    [MOVE]: '\x1b[36m'+'MOVE'+'\x1b[0m'+' - Moves your robot forward one position, based on its direction, if it\'s already placed on the board',
    [LEFT]: '\x1b[36m'+'LEFT'+'\x1b[0m'+' - Rotates your robot 90 degrees to the left, facing a new orientation',
    [RIGHT]: '\x1b[36m'+'RIGHT'+'\x1b[0m'+' - Rotates your robot 90 degrees to the right, facing a new orientation',
    [REPORT]: '\x1b[36m'+'REPORT'+'\x1b[0m'+' - Reports on the robot\'s current position and direction', 
    [EXIT]: '\x1b[36m'+'EXIT'+'\x1b[0m'+' - Exits the application'
}

const place = (robot:Robot, x:number, y:number, orientation:string, boardSize:number) => {
    try {
        validatePlace(x, y, orientation, boardSize);
    } catch(e) {
        throw new Error(e.message);
    }

    robot.x = x;
    robot.y = y;
    robot.orientation = orientations.indexOf(orientation);
    
    if(!robot.isPlaced) {
        robot.isPlaced = true;
    }

    return robot;
}

const validatePlace = (x:number, y:number, orientation:string, boardSize:number):boolean => {
    if (!isPositiveInteger(x) || x > boardSize-1 || x < 0) {
        throw new Error(`X must be a number between 0 and ${boardSize-1}`)
    }

    if (!isPositiveInteger(y) || y > boardSize-1 || y < 0) {
        throw new Error(`Y must be a number between 0 and ${boardSize-1}`)
    }

    if(!orientations.includes(orientation)) {
        throw new Error(`O (orientation) must be one of: ${orientations.join(', ')}`);
    }

    return true
}

const move = (robot:Robot, boardSize:number) => {
    if(!robot.isPlaced) {
        throw new Error('The robot must be on the board. Please use the \'PLACE\' command first.');
    }

    const [nextX, nextY] = [robot.x+moves[orientations[robot.orientation]].x, robot.y+moves[orientations[robot.orientation]].y];

    try {
        validateMove(nextX, nextY, boardSize);
    } catch(e) {
        throw new Error(e.message);
    }

    robot.x = nextX;
    robot.y = nextY;

    return robot;
}

const validateMove = (x:number, y:number, boardSize:number) => {
    if(x > boardSize-1 || y > boardSize-1 || x < 0 || y < 0) {
        throw new Error('Invalid move: robot must stay on the board');
    }
} 

const rotate = (robot:Robot, orientation:string) => {
    if(!robot.isPlaced) {
        throw new Error('The robot must be on the board. Please use the \'PLACE\' command first.');
    }

    switch(orientation) {
        case LEFT:
            if(robot.orientation - 1 < 0) {
                robot.orientation = 3;
            } else {
                robot.orientation = robot.orientation - 1;
            }
            break;
        case RIGHT:
            if(robot.orientation + 1 > 3) {
                robot.orientation = 0;
            } else {
                robot.orientation = robot.orientation + 1;
            }
            break;
        default:
            throw new Error('Rotation direction unsupported');
    }

    return robot;
}

const report = (robot:Robot) => {
    if(!robot.isPlaced) {
        throw new Error('The robot must be on the board. Please use the \'PLACE\' command first.');
    }

    const report = `\n\x1b[32mRobot is at position (${robot.x},${robot.y}) and is facing ${orientations[robot.orientation]}\x1b[0m\n`;

    console.log(report);

    return report;
}

const processAction = (input:string, robot:Robot, boardSize:number) => {
    const [action, args=''] = input.toUpperCase().split(' ');

    switch (action) {
        case PLACE:
            const [x, y, orientation] = args.split(',');
            place(robot, Number(x), Number(y), orientation, boardSize);
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
        case REPORT:
            report(robot);
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

export { place, move, rotate, report, printInstructions, processAction, orientations, Robot };
