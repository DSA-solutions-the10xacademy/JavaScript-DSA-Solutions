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

A = readLine().split(" ");

a1 = parseInt(A[0]);
a2 = parseInt(A[1]);
a3 = parseInt(A[2]);

B = readLine().split(" ");

b1 = parseInt(B[0]);
b2 = parseInt(B[1]);
b3 = parseInt(B[2]);

AdotB = a1 * b1 + a2 * b2 + a3 * b3;

ModulusOfACrossB = Math.sqrt((a2 * b3 - a3 * b2) * (a2 * b3 - a3 * b2)
    + (a1 * b3 - b1 * a3) * (a1 * b3 - b1 * a3)
    + (a1 * b2 - a2 * b1) * (a1 * b2 - a2 * b1));

if (ModulusOfACrossB == 0) {
    console.log(1);
} else if (AdotB == 0) {
    console.log(2);
} else {
    console.log(0);
}