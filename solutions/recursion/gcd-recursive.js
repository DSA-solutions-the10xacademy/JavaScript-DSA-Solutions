let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function Gcd(divident, divisor) {
  // Implement this function
  if (divisor == 0) {
    return divident;
  }
  return Gcd(divisor, divident % divisor);
}

let testCases = parseInt(readLine());
while (testCases > 0) {
  let input = readLine().split(" ");
  let divident = parseInt(input[0]);
  let divisor = parseInt(input[1]);
  console.log(Gcd(divident, divisor));
  testCases--;
}
