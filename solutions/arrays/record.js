let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let noOfEle = parseInt(readLine());
let arr = readLine().split(" ").map(Number);

let maxRecord = arr[0]
let minRecord = arr[0]
let highScoreIncreased = 0
let lowScoreDecreased = 0

for (let i = 1; i < noOfEle; i++) {
    if (arr[i] < minRecord) {
        minRecord = arr[i]
        highScoreIncreased++
    }
    if (arr[i] > maxRecord) {
        maxRecord = arr[i]
        lowScoreDecreased++
    }
}
console.log(lowScoreDecreased, highScoreIncreased)