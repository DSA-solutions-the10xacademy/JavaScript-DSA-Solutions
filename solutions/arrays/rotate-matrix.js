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
function rotate(arr, numOfRows){
	console.log(arr[0].length);
	let matrix = [];
	for (let column = 0; column < arr[0].length; column++){
		let temporaryArray = [];
		for (let row = numOfRows-1; row >= 0; row--){
			temporaryArray.push(arr[row][column]);
		}
		matrix.push(temporaryArray);
	}
	return matrix
}

let numOfRows = parseInt(readLine());
let arr = [];
for(let row = 0; row < numOfRows; row++){
	let temporaryArray = readLine().split(" ");
	for(let index = 0; index < temporaryArray.length; index++){
		temporaryArray[index] = parseInt(temporaryArray[index]);
	}
	arr.push(temporaryArray);
}

let rotatedMatrix = rotate(arr, numOfRows);
for(row of rotatedMatrix){
	console.log(...row);
}
