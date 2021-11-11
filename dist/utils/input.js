"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const GetInput = (promptText) => new Promise((resolve) => {
    rl.question(`${promptText} `, function (input) {
        rl.close();
        resolve(input);
    });
});
exports.default = GetInput;
//# sourceMappingURL=input.js.map