let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let WordsList = readLine().split(" ");
let ans = 0;
for (let i = 0; i < WordsList.length; i++) {
  if (WordsList[i].length > ans) {
    ans = WordsList[i].length;
  }
}
console.log(ans);

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
