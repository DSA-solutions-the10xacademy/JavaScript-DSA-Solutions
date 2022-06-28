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
let n = parseInt(readLine());
let temp = n;
rev = 0;
while (n > 0) {
  let d = n % 10;
  rev = rev * 10 + d;
  n = Math.floor(n / 10);
}
if (temp == rev) {
  console.log("True");
} else {
  console.log("False");
}
