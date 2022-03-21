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
let arr = [];
for (let index = 0; index < arraySize; index++) {
    arr.push(parseInt(readLine()));
}
let numberOfFolds = parseInt(readLine());
for (let index = 0; index < numberOfFolds; index++) {
    let temporaryArray = [];
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        if (leftIndex != rightIndex) {
            temporaryArray.push(arr[leftIndex] + arr[rightIndex]);
        }
        else {
            temporaryArray.push(arr[leftIndex]);
        }
        leftIndex = leftIndex + 1;
        rightIndex = rightIndex - 1;
    }
    arr = temporaryArray;
}
console.log(arr.length);
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}
