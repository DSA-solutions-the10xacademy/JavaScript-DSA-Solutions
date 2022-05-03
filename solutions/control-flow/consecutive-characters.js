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

let maxLength = 0;
let currLength = 1;

for (let i = 0; i < string.length - 1; i++) {
  if (string[i] == string[i + 1]) {
    currLength++;
  } else {
    if (maxLength < currLength) {
      maxLength = currLength;
    }
    currLength = 1;
  }
}

if (maxLength < currLength) {
  maxLength = currLength;
}

if (string.length == 0) {
  console.log(0);
} else {
  console.log(maxLength);
}
