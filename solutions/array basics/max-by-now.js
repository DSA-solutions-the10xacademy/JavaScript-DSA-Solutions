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
let maximum = Number.MIN_VALUE;
for (let index = 0; index < arraySize; index++) {
    let temporary = parseInt(readLine());
    maximum = Math.max(maximum, temporary);
    console.log(maximum);
}
