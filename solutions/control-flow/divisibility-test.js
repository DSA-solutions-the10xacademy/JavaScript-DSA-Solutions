let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let str = readLine().split(" ");
let n = parseInt(str[0]);
let x = parseInt(str[1]);
let counter = 0;
let arr = readLine()
  .split(" ")
  .map((x) => parseInt(x));
for (let i = 0; i < n; i++) {
  if (arr[i] % x == 0) {
    counter++;
  }
}
console.log(counter);
// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
