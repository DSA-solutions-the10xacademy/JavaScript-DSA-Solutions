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

aAndb = readLine().split(" ");

a = parseInt(aAndb[0]);
b = parseInt(aAndb[1]);

if ((a * b) % 2 == 0) {
    console.log("No");
} else {
    console.log("Yes");
}