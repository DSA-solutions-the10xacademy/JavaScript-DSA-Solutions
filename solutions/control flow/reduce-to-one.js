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

testCases = parseInt(readLine());

for (let i = 0; i < testCases; i++) {
    n = parseInt(readLine());

    if (n <= 2) {
        console.log(-1);
    } else {
        console.log(1);
    }
}