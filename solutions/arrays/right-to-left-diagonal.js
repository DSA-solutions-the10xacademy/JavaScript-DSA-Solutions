let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as rightToLeftDiagonal
function rightToLeftDiagonal(matrix) {
	let numRows = matrix.length;
	// Anti-diagonal starts from first row, last column
	let rowIndex = 0; // First row
	let colIndex = numRows - 1; // Last column
	let answer = [];
	while (rowIndex < numRows) {
		answer.push(matrix[rowIndex][colIndex]);
		rowIndex = rowIndex + 1;
		colIndex = colIndex - 1;
	}
	return answer;
}


// Do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for (let row = 0; row < m; row++) {
	let rowElements = readLine().split(" ");
	matrix.push(rowElements);
}
let result = rightToLeftDiagonal(matrix);
for (element of result) {
	console.log(element);
}
