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

let isZebraCrossing = "True";

for (let i = 0; i < n - 1; i++) {
  if (arr[i] > 0 && arr[i + 1] > 0) {
    isZebraCrossing = "False";
    break;
  } else if (arr[i] <= 0 && arr[i + 1] <= 0) {
    isZebraCrossing = "False";
    break;
  }
}

console.log(isZebraCrossing);
