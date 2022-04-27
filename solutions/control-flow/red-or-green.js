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

let R_count = 0;
let G_count = 0;
let min = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i] == "R") {
    R_count++;
  } else {
    G_count++;
  }
}

if (R_count > G_count) {
  min = G_count;
} else {
  min = R_count;
}

console.log(min);
