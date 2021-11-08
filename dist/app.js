const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Name?", function (name) {
    rl.question("Age?", function (age) {
        console.log(`${name}, you are ${age} years old`);
        rl.close();
    });
});
rl.on("close", function () {
    console.log("\nExit on rl.close()");
    process.exit(0);
});
/*
// express
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Robot!');
});

app.listen(port, (err) => {
  if(err) {
    return console.error(err);
  }
  return console.log(`server listening on ${port}`);
});
*/
//# sourceMappingURL=app.js.map