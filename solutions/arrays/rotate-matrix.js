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

let numRows = parseInt(readLine());
let matrix = [];
for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
	let currRow = readLine().split(" ");
	for (let index = 0; index < currRow.length; index++) {
		currRow[index] = parseInt(currRow[index]);
	}
	matrix.push(currRow);
}
console.log(matrix[0].length);
let rotatedMatrix = [];
for (let column = 0; column < matrix[0].length; column++) {
	let newRow = [];
	for (let row = matrix.length - 1; row >= 0; row--) {
		newRow.push(matrix[row][column])
	}
	rotatedMatrix.push(newRow);
}
for (row of rotatedMatrix) {
	console.log(...row);
}
