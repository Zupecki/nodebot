import GetInput from './utils/input';
import { printInstructions, processAction, Robot } from './logic';

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
      console.log(e.message);
    }
  }
}

main()
