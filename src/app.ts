import GetInput from './utils/input';
import { printInstructions, processAction, orientations, Robot } from './logic';

const main = async () => {
  const boardSize = 5;
  const robot:Robot = {
    x: -1,
    y: -1,
    orientation: -1,
    isPlaced: false
  }

  while (true) {
    printInstructions()

    const choice = await GetInput('What action would you like to perform?');

    try {
      processAction(choice, robot, boardSize);
    } catch(e) {
      console.log("\x1b[31m", e.message, "\x1b[0m");
    }

    if(robot.isPlaced) {
      console.log("\x1b[32m", `Robot is at position (${robot.x},${robot.y}) and is facing ${orientations[robot.orientation]}`, "\x1b[0m");
    }
  }
}

main()
