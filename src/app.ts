import GetInput from './utils/input';

const main = async () => {
  let isPlaced = false;

  while (true) {
    // print menu options

    // get input
    const name = await GetInput('What is your move?');

    // process/validate input
    // if !isPlaced, only accept PLACE input

    // call appropriate function on successful input

    // loop until exit option is called
    console.log(`Your name is ${name}`);
  }
}

main()
