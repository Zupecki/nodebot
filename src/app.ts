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

  console.log("\x1b[33m", "--- Welcome to NodeBot v1.0 ---\n", "\x1b[0m")

  while (true) {
    printInstructions()

    const choice = await GetInput('What action would you like to perform?');

    try {
      processAction(choice, robot, boardSize);
    } catch(e) {
      console.log("\x1b[31m", e.message, "\x1b[0m");
    }
  }
}

main()
