let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let sum = 0;
n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  if (i % 2 == 0) {
    sum += parseInt(readLine());
  } else {
    sum -= parseInt(readLine());
  }
}
console.log(sum);
// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
