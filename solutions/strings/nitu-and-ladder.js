let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let stairCaseLength = parseInt(readLine());

for (let index = 1; index <= stairCaseLength; index++) {
    let stair = "";

    let noOfSpaces = stairCaseLength - index;
    for (let spaces = 1; spaces <= noOfSpaces; spaces++) {
        stair += " ";
    }

    let noOfSymbols = index;
    for (let symbol = 1; symbol <= noOfSymbols; symbol++) {
        stair += "#";
    }

    console.log(stair);
}