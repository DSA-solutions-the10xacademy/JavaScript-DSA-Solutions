let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let length = parseInt(readLine());
let num1 = parseInt(readLine());
let result = false;
for (let i = 2; i <= length; i++) {
  let num2 = parseInt(readLine());
  let consecutiveSum = num1 + num2;
  if (consecutiveSum > 100) {
    result = true;
    break;
  }
  consecutiveSum = num2;
  num1 = num2;
}
console.log(result);

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
