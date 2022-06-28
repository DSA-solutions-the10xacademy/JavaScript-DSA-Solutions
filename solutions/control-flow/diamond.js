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
  for (let indexForSpaces = 0; indexForSpaces < n - index - 1; indexForSpaces++) {
    columnString += " ";
  }

  for (let indexForStars = 0; indexForStars < 2 * index + 1; indexForStars++) {
    columnString += "*";
  }

  console.log(columnString);
}

for (let index = 1; index < n; index++) {
  let columnString = "";

  for (let indexForSpaces = 0; indexForSpaces < index; indexForSpaces++) {
    columnString += " ";
  }

  for (let indexForStars = 0; indexForStars < 2 * (n - index - 1) + 1; indexForStars++) {
    columnString += "*";
  }

  console.log(columnString);
}
