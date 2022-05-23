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
let answer = -1;
for (let index1 = 0; index1 < arraySize; index1++) {
    let temporaryOccurence = 0;
    for (let index2 = 0; index2 < arraySize; index2++) {
        if (arr[index1] === arr[index2]) {
            temporaryOccurence = temporaryOccurence + 1;
        }
    }
    if (temporaryOccurence === 4) {
        answer = arr[index1];
    }
}
console.log(answer);
