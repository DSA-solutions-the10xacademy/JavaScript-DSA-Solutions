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

let string = readLine();
let N = parseInt(readLine());

let l = string.length;

if (l == 1) {
  console.log(string);
} else {
  let resString = "";
  resString += string;

  for (let i = N; i < l; i++) {
    resString += string[l - i - 1];
  }
  console.log(resString);
}
