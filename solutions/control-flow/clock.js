let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let s = readLine().split(" ");
let n1 = parseInt(s[0]);
let n2 = parseInt(s[1]);
let sum = n1 + n2;
if (sum % 12 == 0) {
  console.log(12);
} else {
  console.log(sum % 12);
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
