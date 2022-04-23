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

for (let i = 0; i < testCases; i++) {
    coordinates = readLine().split(" ");
    xCooordinate = coordinates[0];
    yCoordinate = coordinates[1];

    if (xCooordinate > 0 && yCoordinate > 0) {
        console.log("Q1");
    } else if (xCooordinate < 0 && yCoordinate > 0) {
        console.log("Q2");
    } else if (xCooordinate < 0 && yCoordinate < 0) {
        console.log("Q3");
    } else {
        console.log("Q4");
    }
}