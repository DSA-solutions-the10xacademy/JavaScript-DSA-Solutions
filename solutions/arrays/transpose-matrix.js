let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// you should return a list of lists
function transposeMatrix(matrix) {
    //implement this function
    let resultMatrix = [];
    for (let colIndex = 0; colIndex < matrix[0].length; colIndex++) {
        let newRow = [];
        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            newRow.push(matrix[rowIndex][colIndex]);
        }
        resultMatrix.push(newRow);
    }
    return resultMatrix;
}

// do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for (let index = 0; index < m; index++) {
    let row = readLine().split(" ");
    matrix.push(row);
}
let result = transposeMatrix(matrix);
for (row of result) {
    console.log(...row);
}
