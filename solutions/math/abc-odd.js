let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// Given A and B values as input which those values lies between 1 and 3 (inclusive),
// and asked to take value of C which also lies between 1 and 3 (inclusive),
// if any value of C with in the range of 1 and 3 gives multiple of a,b&c (A*B*C) is Odd number, log Yes otherwise No.

let input = readLine().split(" ").map(Number); // Map is a Higher Order Functions, Here Map points to every element and convert it to number data type
let aVal = input[0];
let bVal = input[1];
if ((aVal * bVal * 1) % 2 != 0) {
  console.log("Yes");
} else if ((aVal * bVal * 2) % 2 != 0) {
  console.log("Yes");
} else if ((aVal * bVal * 3) % 2 != 0) {
  console.log("Yes");
} else {
  console.log("No");
}
