"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = __importDefault(require("./utils/input"));
const logic_1 = require("./logic");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let isPlaced = false;
    const boardSize = 5; // always a square
    const Robot = {
        x: -1,
        y: -1,
        orientation: -1
    };
    while (true) {
        // print menu options
        (0, logic_1.PrintInstructions)();
        // get input
        const choice = yield (0, input_1.default)('What action would you like to perform?');
        // process/validate input
        // if !isPlaced, only accept PLACE input
        // call appropriate function on successful input
        // loop until exit option is called
        console.log(`Your choice is ${choice}`);
        isPlaced = false;
    }
});
main();
//# sourceMappingURL=app.js.map