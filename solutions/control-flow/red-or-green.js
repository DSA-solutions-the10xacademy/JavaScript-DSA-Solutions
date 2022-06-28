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

let inputString = readLine();
let countRed = 0;
let countGreen = 0;
let minimum = 0;

for (let index = 0; index < inputString.length; index++) {
  if (inputString[index] == "R") {
    countRed++;
  } else {
    countGreen++;
  }
}

if (countRed > countGreen) {
  minimum = countGreen;
} else {
  minimum = countRed;
}

console.log(minimum);
