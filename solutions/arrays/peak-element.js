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
let testCases = parseInt(readLine());
for(let testCaseIndex = 0 ; testCaseIndex < testCases ; testCaseIndex++){
	let arrayLength = parseInt(readLine());
	let array = readLine().split(" ").map(Number);
	let result = -1;
	if(arrayLength === 1){
		result = 1;
	}
	else if(array[0] > array[1]){
		result = 1;
	}
	else{
		for(let arrayIndex = 1 ; arrayIndex < arrayLength - 1 ; arrayIndex++){
			if((array[arrayIndex] > array[arrayIndex+1]) && (array[arrayIndex] > array[arrayIndex-1])){
				result = arrayIndex+1;
				break;
			}
		}
	}
	if((array[arrayLength-1] > array[arrayLength-2]) && (result === -1)){
		result = arrayLength;
	}
	console.log(result);
}