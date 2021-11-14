const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const GetInput = (promptText:String):Promise<string> => new Promise((resolve, reject) => {
    rl.question(`${promptText} `, function(input:string) {
        if(input.length > 0) {
            resolve(input);
        } else {
            reject(new Error('input failed to be captured from user'));
        }
    });
});

export default GetInput;