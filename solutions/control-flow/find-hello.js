let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let str = readLine();
  let start = 0; //Using sliding window of size equal to the length of the target "hello"
  let end; //start denotes the starting index of the window and end denotes the ending-index+1 of the window
  let res = "No";
  for (end = 5; end <= str.length; end++) {
    let subString = str.substring(start, end);
    if (subString == "hello") {
      res = "Yes";
      break;
    }
    start++;//sliding the window
  }
  console.log(res);
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
