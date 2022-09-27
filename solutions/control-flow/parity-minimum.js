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
let n = parseInt(readLine());
let smallestNumber = parseInt(readLine());
for (let index = 1; index < n; index++) {
    smallestNumber = Math.min(smallestNumber, parseInt(readLine()));
}
let sum = 0;
while (smallestNumber > 0) {
    sum = sum + smallestNumber % 10;
    smallestNumber = parseInt(smallestNumber / 10);
}
if (sum % 2 === 0) {
    console.log(1);
}
else {
    console.log(0);
}
