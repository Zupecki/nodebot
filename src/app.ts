import GetInput from './utils/input';
import { PrintInstructions } from './logic';

const main = async () => {
  let isPlaced = false;
  const boardSize = 5; // always a square
  const Robot = {
    x: -1,
    y: -1,
    orientation: -1
}

  while (true) {
    // print menu options
    PrintInstructions()

    // get input
    const choice = await GetInput('What action would you like to perform?');

    // process/validate input
    // if !isPlaced, only accept PLACE input

    // call appropriate function on successful input

    // loop until exit option is called
    console.log(`Your choice is ${choice}`);
  }
}

main()
