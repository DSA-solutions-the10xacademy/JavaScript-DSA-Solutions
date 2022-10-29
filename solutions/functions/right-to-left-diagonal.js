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
function rightToLeftDiagonal(matrix){
	let lengthOfMatrix = matrix.length;
	let noOfRows = matrix.length;
	let noOfColumns = matrix[0].length;
	let resultantArray = [];
	for(let rowIndex = 0 ; rowIndex < noOfRows ; rowIndex++){
		for(let columnIndex = 0 ; columnIndex < noOfColumns ; columnIndex++){
			if(rowIndex + columnIndex === lengthOfMatrix - 1){
				resultantArray.push(matrix[rowIndex][columnIndex]);
			}
		}
	}
	return resultantArray;
}

// Do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for (let row = 0 ; row < m ; row++) {
  let rowElements = readLine().split(" ");
  matrix.push(rowElements);
}
let result = rightToLeftDiagonal(matrix);
for (element of result) {
  console.log(element);
}