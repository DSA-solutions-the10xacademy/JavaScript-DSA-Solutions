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
function numberOfWays(currentPosition, targetPosition) {
    if (currentPosition === targetPosition) {
        // We found one valid way.
        return 1;
    }
    if (currentPosition > targetPosition) {
        // We went beyond the target. So, this way is invalid.
        return 0;
    }
    return numberOfWays(currentPosition + 1, targetPosition) + numberOfWays(currentPosition + 2, targetPosition);
}
let numTests = parseInt(readLine());
for (let testIndex = 0; testIndex < numTests; testIndex++) {
    let distance = parseInt(readLine());
    console.log(numberOfWays(0, distance));
}
