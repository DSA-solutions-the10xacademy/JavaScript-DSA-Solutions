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

let noOfTestCases = parseInt(readLine());

let numberToChar = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
for (let index = 0; index < noOfTestCases; index++) {
    let columnNumber = parseInt(readLine());

    let columnIndex = "";
    while (columnNumber != 0) {
        columnNumber--;
        columnIndex = numberToChar[columnNumber % 26] + columnIndex;
        columnNumber = Math.floor(columnNumber / 26);
    }

    console.log(columnIndex);
}