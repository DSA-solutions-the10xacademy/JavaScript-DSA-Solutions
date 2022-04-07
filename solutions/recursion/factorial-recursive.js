let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function Factorial(n) {
  if (n < 0) {
    return undefined;
  }
  else if (n === 0) {
    return 1;
  } 
  else {
    return n * Factorial(n - 1);
  }
}

let n = parseInt(readLine());
console.log(Factorial(n));
