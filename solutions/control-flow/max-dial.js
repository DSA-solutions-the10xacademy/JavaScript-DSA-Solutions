let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let numberOfDials = parseInt(readLine());
let maxDials = parseInt(readLine());
let numberOfInputs = parseInt(readLine());

let Dials = [];
for (let index = 0; index < numberOfInputs; index++) {
  Dials.push(parseInt(readLine()));
}

let result = 0;

//initiate dial_arr with 0
let dialArray = [];
for (let index = 0; index <= numberOfDials; index++) {
  dialArray.push(0);
}

for (let i = 0; i < numberOfInputs; i++) {
  let input = Dials[i];
  dialArray[input]++;
  if (dialArray[input] == maxDials) {
    result = input;
    break;
  }
}

console.log(result);
