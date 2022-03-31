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
function recursiveMultiply(n) {
    if (n < 0) {
        return recursiveMultiply(Math.abs(n));
    }
    if (n === 0) {
        return 1;
    }
    return n % 10 * recursiveMultiply(parseInt(n / 10));
}
let t = parseInt(readLine());
for (let testCase = 0; testCase < t; testCase++) {
    let n = parseInt(readLine());
    if (n === 0) {
        console.log(0);
    }
    else {
        let answer = recursiveMultiply(n);
        console.log(answer);
    }
}
