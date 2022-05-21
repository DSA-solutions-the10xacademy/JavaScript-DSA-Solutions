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

let indices = [];
for (let idx = 0; idx < arraySize; idx++) {
    indices.push(parseInt(readLine()));
}

let target = [];
for (let idx = 0; idx < arraySize; idx++) {
    let currElement = nums[idx];
    let targetIndex = indices[idx];
    // We need to insert currElement at targetIndex
    // But, we cannot create additional space in the middle of an array
    // So, we will first insert currElement at the end of target
    // Then, we will shift it towards left, one index at a time
    target.push(currElement);
    for (let pos = target.length - 1; pos > targetIndex; pos--) {
        target[pos] = target[pos - 1];
        target[pos - 1] = currElement;
    }
}

for (let idx = 0; idx < arraySize; idx++) {
    console.log(target[idx]);
}
