let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let k = parseInt(readLine());
let n = parseInt(readLine());
let arr = [];
let result = -1;
for (let i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}
for (let i = 0; i < n; i++) {
  if (arr[i] == k) {
    result = i;
    break;
  }
}
console.log(result);

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
