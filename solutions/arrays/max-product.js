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
let arrayOneSize = parseInt(readLine());
let arrayTwoSize = parseInt(readLine());
let arr1 = readLine().split(" ");
let arr2 = readLine().split(" ");
for (let index = 0; index < arrayOneSize; index++) {
    arr1[index] = parseInt(arr1[index]);
}
for (let index = 0; index < arrayTwoSize; index++) {
    arr2[index] = parseInt(arr2[index]);
}
let maximumArrayOne = Math.abs(arr1[0]);
let maximumArrayTwo = Math.abs(arr2[0]);
for (let index = 0; index < arrayOneSize; index++) {

    maximumArrayOne = Math.max(maximumArrayOne, Math.abs(arr1[index]));
}
for (let index = 0; index < arrayTwoSize; index++) {
    maximumArrayTwo = Math.max(maximumArrayTwo, Math.abs(arr2[index]));
}
console.log(maximumArrayTwo * maximumArrayOne);
