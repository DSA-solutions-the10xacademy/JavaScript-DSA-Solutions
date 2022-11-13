let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let noOfIntegers = parseInt(readLine());
let integerArray = [];
for(let index = 0 ; index < noOfIntegers ; index++){
	let integer = parseInt(readLine());
	integerArray.push(integer);
}
let maximumNumber = Number.NEGATIVE_INFINITY;
let minimumNumber = Number.POSITIVE_INFINITY;
for(let index = 0 ; index < noOfIntegers ; index++){
	if(integerArray[index] > maximumNumber){
		maximumNumber = integerArray[index];
	}
	if(integerArray[index] < minimumNumber){
		minimumNumber = integerArray[index];
	}
}
console.log(maximumNumber);
console.log(minimumNumber);