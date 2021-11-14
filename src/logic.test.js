import { orientations, place, move, rotate, report, exit } from './logic';

describe("Place", () => {
    const boardSize = 5;
    const robot = {
        x: -1,
        y: -1,
        orientation: -1,
        isPlaced: false
    }

    test("it should place the robot within boardSize", () => {
        const expectedRobot = {
            x: 0,
            y: 0,
            orientation: 0,
            isPlaced: true 
        }

        expect(place(robot, 0, 0, 'NORTH', boardSize)).toMatchObject(expectedRobot);
    });

    test("it should not place the robot outside x boardSize", () => {
        expect(() => place(robot, 5, 2, 'NORTH', boardSize)).toThrow(`X must be a number between 0 and ${boardSize-1}`);
    });

    test("it should not place the robot outside y boardSize", () => {
        expect(() => place(robot, 2, 5, 'NORTH', boardSize)).toThrow(`Y must be a number between 0 and ${boardSize-1}`);
    });

    test("it should not place the robot if orientation incorrect", () => {
        expect(() => place(robot, 2, 2, 'SOUTHEAST', boardSize)).toThrow(`O (orientation) must be one of: ${orientations.join(', ')}`);
    });
});

describe("Move", () => {
    const boardSize = 5;
    const robot = {
        x: -1,
        y: -1,
        orientation: -1,
        isPlaced: false
    }

    test("it should not move the robot if the robot is not placed", () => {
        expect(() => move(robot, boardSize)).toThrow('The robot must be on the board. Please use the \'PLACE\' command first.');
    });

    test("it should move the position by 1 in y", () => {
        // manually put robot on the board
        robot.x = 0;
        robot.y = 0;
        robot.orientation = 0;
        robot.isPlaced = true;

        const expectedRobot = {
            x: 0,
            y: 1,
            orientation: 0,
            isPlaced: true
        }

        expect(move(robot, boardSize)).toMatchObject(expectedRobot);
    });

    test("it should move the position by -1 in y", () => {
        // manually put robot on the board
        robot.x = 0;
        robot.y = 1;
        robot.orientation = 2;
        robot.isPlaced = true;

        const expectedRobot = {
            x: 0,
            y: 0,
            orientation: 2,
            isPlaced: true
        }

        expect(move(robot, boardSize)).toMatchObject(expectedRobot);
    });

    test("it should move the position by 1 in x", () => {
        // manually put robot on the board
        robot.x = 0;
        robot.y = 0;
        robot.orientation = 1;
        robot.isPlaced = true;

        const expectedRobot = {
            x: 1,
            y: 0,
            orientation: 1,
            isPlaced: true
        }

        expect(move(robot, boardSize)).toMatchObject(expectedRobot);
    });

    test("it should move the position by -1 in x", () => {
        // manually put robot on the board
        robot.x = 1;
        robot.y = 0;
        robot.orientation = 3;
        robot.isPlaced = true;

        const expectedRobot = {
            x: 0,
            y: 0,
            orientation: 3,
            isPlaced: true
        }

        expect(move(robot, boardSize)).toMatchObject(expectedRobot);
    });

    test("it should not move the position if at edge of board", () => {
        // manually put robot at edge of board in x
        robot.x = 4;
        robot.y = 2;
        robot.orientation = 1;
        robot.isPlaced = true;

        const expectedRobot = {
            x: 4,
            y: 2,
            orientation: 1,
            isPlaced: true
        }

        expect(() => move(robot, boardSize)).toThrow('Invalid move: robot must stay on the board');
    });
});

describe("Rotate", () => {
    const robot = {
        x: -1,
        y: -1,
        orientation: -1,
        isPlaced: false
    }

    test("it should not rotate if robot is not on the board", () => {
        expect(() => rotate(robot, 'LEFT')).toThrow('The robot must be on the board. Please use the \'PLACE\' command first.');
    });

    test("it should rotate left", () => {
        // manually put robot on the board
        robot.x = 0;
        robot.y = 0;
        robot.orientation = 0;
        robot.isPlaced = true;

        const expectedRobot = {
            x: 0,
            y: 0,
            orientation: 3,
            isPlaced: true
        }

        expect(rotate(robot, 'LEFT')).toMatchObject(expectedRobot);
    });

    test("it should rotate right", () => {
        // manually put robot on the board
        robot.x = 0;
        robot.y = 0;
        robot.orientation = 0;
        robot.isPlaced = true;

        const expectedRobot = {
            x: 0,
            y: 0,
            orientation: 1,
            isPlaced: true
        }

        expect(rotate(robot, 'RIGHT')).toMatchObject(expectedRobot);
    });
});

describe("Report", () => {
    const robot = {
        x: -1,
        y: -1,
        orientation: -1,
        isPlaced: false
    }

    test("it should not print out robot status if robot is not on the board", () => {
        expect(() => report(robot)).toThrow('The robot must be on the board. Please use the \'PLACE\' command first.');
    });

    test("it should output the robots position and direction", () => {
        // manually put robot on the board
        robot.x = 0;
        robot.y = 0;
        robot.orientation = 0;
        robot.isPlaced = true;

        expect(report(robot)).toEqual('\n\x1b[32mRobot is at position (0,0) and is facing NORTH\x1b[0m\n');
    });
});
