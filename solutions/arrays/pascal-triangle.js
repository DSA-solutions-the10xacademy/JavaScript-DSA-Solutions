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
let N = parseInt(readLine());
if (N === 1) {
    console.log(1);
}
else {
    let prevRow = [1];
    for (let rowIndex = 1; rowIndex < N; rowIndex++) {
        let numColumns = rowIndex + 1; // 0th row has 1 element, 1st row has 2 elements and so on
        let currRow = [];
        for (let colIndex = 0; colIndex < numColumns; colIndex++) {
            if (colIndex === 0) {
                currRow.push(prevRow[0]);
            }
            else if (colIndex === rowIndex) {
                currRow.push(prevRow[prevRow.length - 1]);
            }
            else {
                currRow.push(prevRow[colIndex] + prevRow[colIndex - 1]);
            }
        }
        prevRow = currRow;
    }
    for (let colIndex = 0; colIndex < N; colIndex++) {
        console.log(prevRow[colIndex]);
    }
}
