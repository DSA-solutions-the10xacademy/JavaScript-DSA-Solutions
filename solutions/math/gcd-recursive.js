let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function findGcd(aNum, bNum) {
  if (bNum == 0) {
    return aNum;
  } else {
    return findGcd(bNum, aNum % bNum);
  }
}

let numOfInputs = parseInt(readLine());
for (let index = 0; index < numOfInputs; index++) {
  let [num1, num2] = readLine().split(" ").map(Number);
  console.log(findGcd(num1, num2));
}
