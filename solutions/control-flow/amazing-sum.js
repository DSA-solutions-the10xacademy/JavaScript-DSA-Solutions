let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let a = parseInt(readLine());
let res = "False";
for (let i = 2; i <= n; i++) {
  let b = parseInt(readLine());
  let c = a + b;
  if (c > 100) {
    res = "True";
    break;
  }
  c = c - a;
  a = b;
}
console.log(res);

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
