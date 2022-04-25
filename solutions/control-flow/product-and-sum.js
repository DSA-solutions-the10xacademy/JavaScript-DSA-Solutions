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

N = parseInt(readLine());

let product = 1;
let sum = 0;

if (N == 0) {
    console.log(0);
} else {
    while (N > 0) {
        digit = N % 10;
        sum = sum + digit;
        product = product * digit;
        N = parseInt(N / 10);
    }

    console.log(product - sum);
}

