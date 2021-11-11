const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const GetInput = (promptText:String):Promise<string> => new Promise((resolve) => {
    rl.question(`${promptText}\n`, function(input:string) {
        rl.close();
        resolve(input);
    });
});

export default GetInput;