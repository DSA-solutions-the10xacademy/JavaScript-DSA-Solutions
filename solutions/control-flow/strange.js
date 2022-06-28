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

let count = 0;

for (let i = 0; i < n; i++) {
  let num = arr[i],
    sum = 0;
  let product = num ? 1 : 0;

  while (num != 0) {
    sum = sum + (num % 10);
    product = product * (num % 10);
    num = parseInt(num / 10);
  }

  if (sum >= product) {
    count++;
  }
}

console.log(count);
