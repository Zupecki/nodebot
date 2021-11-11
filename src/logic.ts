const orientations = [
    "NORTH",
    "EAST",
    "SOUTH",
    "WEST"
]

const moves = {
    "NORTH": {x: 0, y: 0},
    "EAST": {x: 1, y: 0},
    "SOUTH": {x: 0, y: -1},
    "WEST": {x: -1, y: 0}
}

const actionList = [
    "PLACE",
    "MOVE",
    "LEFT",
    "RIGHT",
    "EXIT"
]

const actions = {
    "PLACE": {
        run: () => Place,
        description: 'PLACE X,Y,O - Where X,Y are coordinates and O is orientation'
    },
    "MOVE": {
        run: () => Move,
        description: 'MOVE - Moves your robot forward one position, based on its direction, if it\'s already placed on the board'
    },
    "LEFT": {
        run: (object:{x:number, y:number, orientation:number}) => Rotate(object, 'left'),
        description: 'LEFT - Rotates your robot 90 degrees to the left, facing a new orientation',
    },
    "RIGHT": {
        run: (object:{x:number, y:number, orientation:number}) => Rotate(object, 'right'),
        description: 'RIGHT - Rotates your robot 90 degrees to the right, facing a new orientation',
    },
    "EXIT": {
        run: () => process.exit(0),
        description: 'EXIT - Exits the application',
    }
}

const Place = (boardSize:number, object:{x:number, y:number, orientation:string}, options:{x:number, y:number, orientation:number}) => {
    // check if option position exists inside of board
    // check if direction exists inside directions
    // if both are good, update robot
    console.log("PLACE CALLED");
}

const Move = (boardSize:number, object:{x:number, y:number, orientation:number}) => {
    // check the objects current position and ensure the nextPosition isn't outside the bounds
    // if move is good, update objects position accordingly
    console.log("MOVE CALLED");
}

const Rotate = (object:{x:number, y:number, orientation:number}, rotation:string) => {
    // if rotation is 'left', subtract 1 from orientation... if less than 0, set to orientations.length-1
    // if rotation is 'right, add 1 to orientation... if greater than orientations.length-1, set to 0
    console.log("ROTATE CALLED WITH: ", rotation);
}

const ProcessAction = (input:string, constraints:{constrain:boolean, constrained:string[], allowed:string[]}) => {
    const [action, args] = input.toUpperCase().split(' ');

    // ensure action is valid
    if (!actionList.includes(action)) {
        throw new Error('Action not supported');
    }

    // make sure constraints are checked for available moves
    if (constraints.constrain) {
        if (constraints.constrained.includes(action)) {
            throw new Error(`Action not currently allowed. Allowed actions are: ${constraints.allowed.join(', ')}`);
        }
    }

    // call action
    actions[action].run()(args);
}

const PrintInstructions = () => {
    console.log('Type any of the following actions:\n');

    actionList.map((actionItem, index) => {
        console.log(`${actions[actionItem].description}${index === actionList.length-1 ? '\n' : ''}`);
    });
}

export { Place, Move, Rotate, PrintInstructions, ProcessAction };
