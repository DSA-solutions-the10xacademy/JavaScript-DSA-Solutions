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

let num = BigInt(readLine());

let numOfPositives = BigInt(num / 2n);
let numOfNegatives = num - numOfPositives;

let sumOfPositives = (numOfPositives * (2n * (2n) + (numOfPositives - 1n) * (2n))) / 2n;
let sumOfNegatives = (numOfNegatives * (2n * (-1n) + (numOfNegatives - 1n) * (-2n))) / 2n;

let result = parseInt(sumOfPositives + sumOfNegatives);
console.log(result);