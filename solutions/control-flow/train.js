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

let totalCarsAndCarNumberFromFront = readLine().split(" ");

totalCars = parseInt(totalCarsAndCarNumberFromFront[0]);
carNumberFromFront = parseInt(totalCarsAndCarNumberFromFront[1]);

carNumberFromBack = totalCars - carNumberFromFront + 1;

console.log(carNumberFromBack);
