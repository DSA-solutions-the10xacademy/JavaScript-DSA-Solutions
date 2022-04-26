let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let arr = [];
function print(low, high) {
  if (low > high) {
    return;
  } else if (low == high) {
    arr.push(low);
  } else {
    arr.push(low);
    print(low + 1, high);
  }
}
t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  s = readLine().split(" ");
  l = parseInt(s[0]);
  h = parseInt(s[1]);
  print(l, h);
  console.log(...arr);
  arr = [];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
