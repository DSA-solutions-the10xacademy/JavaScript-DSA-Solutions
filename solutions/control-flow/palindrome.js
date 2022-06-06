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

let string = readLine().toLowerCase();
let n = string.length;

let isPalindrome = true;

for (let i = 0; i < n / 2; i++) {
  if (string[i] != string[n - i - 1]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("YES");
} else {
  console.log("NO");
}
