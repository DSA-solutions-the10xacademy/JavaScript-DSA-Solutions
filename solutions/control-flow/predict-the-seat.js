let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let t = parseInt(readLine());
let seat = ["L", "M", "U", "L", "M", "U", "SL", "SU"];
for (let i = 0; i < t; i++) {
  let s = readLine().split(" ");
  let numOfBerths = parseInt(s[0]);
  let seatNumber = parseInt(s[1]);
  if (seatNumber > 0 && seatNumber <= numOfBerths) {
    console.log(seat[(seatNumber - 1) % 8]);
  } else {
    console.log("Invalid");
  }
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
