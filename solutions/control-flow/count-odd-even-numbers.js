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
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}

let odd_count = 0,
  even_count = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] % 2 == 0) {
    even_count++;
  } else {
    odd_count++;
  }
}

console.log(odd_count);
console.log(even_count);
