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
let arraySize = parseInt(readLine());
let nums = [];
for (let idx = 0; idx < arraySize; idx++) {
  nums.push(parseInt(readLine()));
}
let index = [];
for (let idx = 0; idx < arraySize; idx++) {
  index.push(parseInt(readLine()));
}
let answer = [];
for (let idx = 0; idx < arraySize; idx++) {
  answer.splice(index[idx], 0, nums[idx]);
}
for (let idx = 0; idx < arraySize; idx++) {
  console.log(answer[idx]);
}
