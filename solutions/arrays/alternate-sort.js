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
while (testCases > 0) {
	let arr = readLine().split(" ").map(Number);
	let evenPositionArray = [];
	let oddPositionArray = [];
	// storing values in even and odd indexing based arrays
	for (let index = 0; index < arr.length; index++) {
		if (index % 2 === 0) {
			evenPositionArray.push(arr[index]);
		}
		else {
			oddPositionArray.push(arr[index]);
		}
	}
	// sorting odd index based array in ascending order using insertion sort
	for (let currIndex = 0; currIndex < oddPositionArray.length; currIndex++) {
		let key = oddPositionArray[currIndex];
		let prevIndex = currIndex - 1;
		while (prevIndex >= 0 && oddPositionArray[prevIndex] > key) {
			oddPositionArray[prevIndex + 1] = oddPositionArray[prevIndex];
			prevIndex = prevIndex - 1;
		}
		oddPositionArray[prevIndex + 1] = key;
	}

	//sorting even based array in descending order using insertion sort
	for (let currIndex = 0; currIndex < evenPositionArray.length; currIndex++) {
		let key = evenPositionArray[currIndex];
		let prevIndex = currIndex - 1;
		while (prevIndex >= 0 && evenPositionArray[prevIndex] < key) {
			evenPositionArray[prevIndex + 1] = evenPositionArray[prevIndex];
			prevIndex = prevIndex - 1;
		}
		evenPositionArray[prevIndex + 1] = key;
	}
	// generating answer array teking values from both even and odd indexs based arrays respectively.
	let answer = [];
	for (let index = 0; index < arr.length; index++) {
		if (index % 2 == 0) {
			answer.push(evenPositionArray[parseInt(index / 2)]);
		}
		else {
			answer.push(oddPositionArray[parseInt(index / 2)]);
		}
	}
	for (let index = 0; index < answer.length; index++) {
		console.log(answer[index]);
	}
	testCases = testCases - 1;
}
