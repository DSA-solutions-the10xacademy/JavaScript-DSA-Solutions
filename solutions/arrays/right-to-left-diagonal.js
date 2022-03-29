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
	let row = 0;
	let column = matrix.length - 1;
	let answer = [];
	while (column != -1) {
		answer.push(matrix[row][column]);
		row = row + 1;
		column = column - 1;
	}
	return answer;
}


// Do not change anything below this line
let m = parseInt(readLine());
let lst = [];
for (let val = 0; val < m; val++) {
	let row = readLine().split(" ");
	lst.push(row);
}
let res = rightToLeftDiagonal(lst);
for (val of res) {
	console.log(val);
}
