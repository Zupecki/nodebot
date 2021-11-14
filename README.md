# Nodebot
## _A demo for Iress_

Nodebot is a NodeJS, TypeScript, command line application for simulating a robot on a gridded surface. There are a couple of frameworks used, for superfluous/auxiliary functionality, such as Jest and Readline, but otherwise the codebase is written in vanilla, ES6 style JS/TS.

## Features

- Simulate a robot on a 5x5 grid!
- Make the robot move around.
- Now with direction changing mechanics!
- Report on your robots position so you can see where it's at!
- Fall-prevention algorithm ensures your robot is always safe.

## Implementation
- Uses asynch input via readline lib, rather than reading static input from a file.
- No GUI, as per requirements.
- Minimal frameworks.


## Tech
- Node JS.
- TypeScript.
- Jest for testing.

## Installation

NodeBot requires [Node.js](https://nodejs.org/) and TypeScript to run.

Install the dependencies and devDependencies and start the application.

```sh
cd nodebot
npm i
```
## Using the app

Running tests

```sh
npm test
```

Starting the application

```sh
npm start
```

## Instructions

The application will present the User with a menu between each interaction, with descriptions of what each command does. The follow is a copy of the instructions provided by the application at runtime:

- **PLACE X,Y,O** - Where X,Y are coordinates and O is orientation.
- **MOVE** - Moves your robot forward one position, based on its direction, if it's already placed on the board.
- **LEFT** - Rotates your robot 90 degrees to the left, facing a new orientation.
- **RIGHT** - Rotates your robot 90 degrees to the right, facing a new orientation.
- **REPORT** - Reports on the robot's current position and direction.
- **EXIT** - Exits the application.

## Development

Fork away!

## License

MIT

**Free robots for all!**

# Author
Michael Zupecki