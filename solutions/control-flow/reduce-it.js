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

let num = parseInt(readLine());

while (num > 0) {
  if (num % 2 == 0) {
    num -= 11;
  } else {
    num -= 21;
  }
}

console.log(num);
