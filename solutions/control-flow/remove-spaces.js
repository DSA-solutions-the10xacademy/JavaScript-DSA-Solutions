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
let n = string.length;
let res_string = "";

for (let i = 0; i < n; i++) {
  if (string[i] != " ") {
    res_string += string[i];
  }
}

console.log(res_string);
