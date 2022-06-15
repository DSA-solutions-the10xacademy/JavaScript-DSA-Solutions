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
let val = readLine().split(" ");
let arraySize = parseInt(val[0]);
let x = parseInt(val[1]);
let arr = readLine().split(" ");
for (let index = 0; index < arraySize; index++) {
    arr[index] = parseInt(arr[index]);
}
let sum = 0;
for (let index = 0; index < arraySize; index++) {
    sum = sum + arr[index];
}
let answer = 0;
for (let index = 0; index < arraySize; index++) {
    if (sum - arr[index] == x) {
        answer = 1;
    }
}
console.log(answer);
