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
function numberOFWays(targetPosition, currentPosition) {
    if (targetPosition === currentPosition) {
        return 1;
    }
    if (targetPosition < currentPosition) {
        return 0;
    }
    return numberOFWays(targetPosition, currentPosition + 1) + numberOFWays(targetPosition, currentPosition + 2);
}
let testCases = parseInt(readLine());
for (let testCase = 0; testCase < testCases; testCase++) {
    let p = parseInt(readLine());
    console.log(numberOFWays(p, 0));
}
