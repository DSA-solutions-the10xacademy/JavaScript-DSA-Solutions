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
function transposeMatrix(matrix){
	//implement this function
	let resultMatrix=[];
	for(let column=0;column<matrix[0].length;column++)
	{
		let newRow=[];
		for(let row=0;row<matrix.length;row++)
		{
			newRow.push(matrix[row][column]);
		}
		resultMatrix.push(newRow);
	}
	return resultMatrix;
}



// do not change anything below this line
let m = parseInt(readLine());
let lst = [];
for(let val=0;val<m;val++){
	let row=readLine().split(" ");
	lst.push(row);
}
let result = transposeMatrix(lst);
for(row of result){
	console.log(...row);
}
