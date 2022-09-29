let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let testCases = parseInt(readLine());
for(let testCaseIndex = 0 ; testCaseIndex < testCases ; testCaseIndex++){
	let arrayLength = parseInt(readLine());
	let array = readLine().split(" ").map(Number);
	let firstLargest = Number.NEGATIVE_INFINITY;
	let secondLargest = Number.NEGATIVE_INFINITY;
	for(let arrayIndex = 0 ; arrayIndex < arrayLength ; arrayIndex++){
		if(array[arrayIndex] > firstLargest){
			secondLargest = firstLargest;
			firstLargest = array[arrayIndex];
		}else if(array[arrayIndex] < firstLargest && array[arrayIndex] > secondLargest){
			secondLargest = array[arrayIndex];
		}
	}
	if(secondLargest != Number.NEGATIVE_INFINITY){
		console.log(secondLargest);
	}else{
		console.log("NA");
	}
}