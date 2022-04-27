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

let inputs = readLine().split(" ");

let totalCars = parseInt(inputs[0]);
let carNumberFromFront = parseInt(inputs[1]);
let carNumberFromBack = totalCars - carNumberFromFront + 1;

console.log(carNumberFromBack);
