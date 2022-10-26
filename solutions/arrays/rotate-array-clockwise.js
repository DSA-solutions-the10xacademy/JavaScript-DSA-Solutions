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
let arr = readLine().split(" ");
let rotate = parseInt(readLine());
let answer = [];
for (let index = rotate; index < arr.length; index++) {
	answer.push(arr[index]);
}
for (let index = 0; index < rotate; index++) {
	answer.push(arr[index]);
}
for (let index = 0; index < arr.length; index++) {
	console.log(answer[index]);
}
