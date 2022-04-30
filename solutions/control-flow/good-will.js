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

for (let i = 0; i < n; i++) {
  let col_string = "";

  for (let j = 0; j < n - i - 1; j++) {
    col_string += " ";
  }

  for (let j = 0; j < 2 * i + 1; j++) {
    if ((j + i) % 2 == 0) {
      col_string += "*";
    } else {
      col_string += "$";
    }
  }
  console.log(col_string);
}
