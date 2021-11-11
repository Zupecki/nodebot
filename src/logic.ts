const Robot = {
    x: -1,
    y: -1,
    orientation: 0
}

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

const Place = (boardSize:number, object:{x:number, y:number, orientation:string}, options:{x:number, y:number, orientation:number}) => {
    // check if option position exists inside of board
    // check if direction exists inside directions
    // if both are good, update robot
}

const Move = (boardSize:number, object:{x:number, y:number, orientation:number}) => {
    // check the objects current position and ensure the nextPosition isn't outside the bounds
    // if move is good, update objects position accordingly
}

const Rotate = (object:{x:number, y:number, orientation:number}, rotation:string) => {
    // if rotation is 'left', subtract 1 from orientation... if less than 0, set to orientations.length-1
    // if rotation is 'right, add 1 to orientation... if greater than orientations.length-1, set to 0
}

export { Place, Move, Rotate, Robot };
