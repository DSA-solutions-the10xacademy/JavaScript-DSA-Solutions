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

for (let i = 0; i < n; i++) {
  if (isPrime(arr[i])) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
