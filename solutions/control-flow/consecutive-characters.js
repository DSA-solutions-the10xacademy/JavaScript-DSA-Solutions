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

let max_length = 0;
let curr_length = 1;

for (let i = 0; i < string.length - 1; i++) {
  if (string[i] == string[i + 1]) {
    curr_length++;
  } else {
    if (max_length < curr_length) {
      max_length = curr_length;
    }
    curr_length = 1;
  }
}

if (max_length < curr_length) {
  max_length = curr_length;
}

if (string.length == 0) {
  console.log(0);
} else {
  console.log(max_length);
}
