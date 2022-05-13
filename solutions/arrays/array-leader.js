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
let arraySize = parseInt(readLine());
let arr = [];
for(let index = 0; index < arraySize; index++) {
	arr.push(parseInt(readLine()));
}
// If an element is greater than the maximum of a set of elements, then it will be greater than all the elements in the set.
// So, to check if an element is greater than all the elements to its right, it is sufficient to check it is greater than the maximum of all the elements to its right (in other words, no need to compare with all the elements).
// Let us iterate the array from right to left and at each step we will maintain a running maximum (i.e. the maximum of all the elements to the right of the current index).
let runningMaximum = Number.NEGATIVE_INFINITY;
for(let index = arraySize - 1; index >= 0; index--) {
	if(arr[index] > runningMaximum) {
		// if current element is greater than the maximum of all values to its right, then it is a leader
		console.log(arr[index]);
	}
	runningMaximum = Math.max(runningMaximum, arr[index]); // Update the running maximum
}
