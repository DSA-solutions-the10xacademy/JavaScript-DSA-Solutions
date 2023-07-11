let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let noOfTestcases = parseInt(readLine());

for (let index = 0; index < noOfTestcases; index++) {
    let noOfSteps = parseInt(readLine());
    let steps = readLine();

    let level = 0, noOfValleys = 0;
    for (let step = 0; step < noOfSteps; step++) {
        if (steps[step] == 'U') {
            level++;

            if (level == 0) {
                noOfValleys++;
            }
        } else {
            level--;
        }
    }
    console.log(noOfValleys);
}