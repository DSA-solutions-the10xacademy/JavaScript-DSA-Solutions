let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function stringRepeat(inputString, repeat){
    let resultString = "";

    for(let i = 1; i < repeat; i++){
        resultString += inputString + " ";
    }

    resultString += inputString;

    return resultString;
}

let inputString = readLine();
let repeat = parseInt(readLine());

console.log(stringRepeat(inputString, repeat));