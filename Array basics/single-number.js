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
for (let index = 0; index < arraySize; index++) {
    let found = false;
    for (let currIndex = 0; currIndex < arraySize; currIndex++) {
        if (index != currIndex) {
            if (arr[index] === arr[currIndex]) {
                found = true;
            }
        }
    }
    if (found === false) {
        console.log(arr[index]);
    }
}
