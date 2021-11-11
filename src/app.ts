import GetInput from './utils/input';
import { PrintInstructions, ProcessAction } from './logic';

const main = async () => {
  let isPlaced = false;
  const boardSize = 5; // always a square
  const Robot = {
    x: -1,
    y: -1,
    orientation: -1
  }

  const actionConstraints = {
    constraint: isPlaced,
    allowable: [
      "PLACE",
      "EXIT"
    ],
    constrained: [
      "MOVE",
      "LEFT",
      "RIGHT"
    ]
  }

  while (true) {
    // print menu options
    PrintInstructions()

    // get input
    const choice = await GetInput('What action would you like to perform?');

    try {
      ProcessAction(choice, actionConstraints);
    } catch(e) {
      console.log(e.message);
    }
  }
}

main()
