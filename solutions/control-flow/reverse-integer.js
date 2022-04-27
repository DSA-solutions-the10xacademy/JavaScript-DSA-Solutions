let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let temp = n;
let rev = 0;
if (temp < 0) {
  temp = temp * -1;
}
while (temp > 0) {
  let d = temp % 10;
  rev = rev * 10 + d;
  temp = Math.floor(temp / 10);
}
if (n < 0) {
  console.log(-1 * rev);
} else {
  console.log(rev);
}
// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
