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

function f(n) {
    if(n == 1){
        return 1;
    }

    let firstInteger =  (n * (n - 1) / 2) + 1;
    let lastInteger = firstInteger + (n -1);
    let currentTerm = 1;
    for (let i = firstInteger; i <= lastInteger; i++) {
        currentTerm *= i;
    }
    return currentTerm + f(n - 1);
}

let testCases = parseInt(readLine());

for (let i = 0; i < testCases; i++) {
    let n = parseInt(readLine());
    console.log(f(n));
}
