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

for (let index = 0; index < n; index++) {
  let columnString = "";

  for (let j = 0; j < n - index - 1; j++) {
    columnString += " ";
  }

  for (let j = 0; j < 2 * index + 1; j++) {
    if ((j + index) % 2 == 0) {
      columnString += "*";
    } else {
      columnString += "$";
    }
  }
  console.log(columnString);
}
