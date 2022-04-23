let fs = require("fs");
const { connected } = require("process");
const { deflateSync } = require("zlib");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let t = parseInt(readLine());
while (t > 0) {
	let arr = readLine().split(" ");
	for (let i = 0; i < arr.length; i++) {
		arr[i] = parseInt(arr[i]);
	}
	arr.sort(function (a, b) { return a - b; });
	let answer = arr[0];
	arr[1] = arr[1] - arr[0];
	arr[2] = arr[2] - arr[0];
	answer = answer + Math.ceil(arr[1] / 2);
	answer = answer + Math.ceil(arr[2] / 2);
	console.log(answer);
	t = t - 1;
}
