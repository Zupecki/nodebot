"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const GetInput = (promptText) => new Promise((resolve) => {
    rl.question(`${promptText}\n`, function (input) {
        rl.close();
        resolve(input);
    });
});
// rl.on("close", function() {
//     console.log("\nExit on rl.close()");
//     process.exit(0);
// });
exports.default = GetInput;
//# sourceMappingURL=input.js.map