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
let testCases = parseInt(readLine());
while (testCases > 0) {
    let points = readLine().split(' ');
    let x = parseInt(points[0]);
    let y = parseInt(points[1]);
    if (x > 0 && y > 0) {
        console.log("Q1");
    }
    else if (x < 0 && y > 0) {
        console.log("Q2");
    }
    else if (x < 0 && y < 0) {
        console.log("Q3");
    }
    else {
        console.log("Q4");
    }
    testCases = testCases - 1;
}
