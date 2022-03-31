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
function hackMoney(startMoney, targetMoney) {
    if (startMoney === targetMoney) {
        return 1;
    }
    if (startMoney > targetMoney) {
        return 0;
    }
    return hackMoney(startMoney * 10, targetMoney) || hackMoney(startMoney * 20, targetMoney);
}
let testCases = parseInt(readLine());
for (let testCase = 0; testCase < testCases; testCase++) {
    let n = parseInt(readLine());
    let answer = hackMoney(1, n);
    if (answer === 1) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}
