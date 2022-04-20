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
let t = parseInt(readLine());
while (t > 0) {
	let arr = readLine().split(' ');
	let x1 = parseInt(arr[0]);
	let v1 = parseInt(arr[1]);
	let x2 = parseInt(arr[2]);
	let v2 = parseInt(arr[3]);
	if (v1 <= v2) {
		console.log("NO");
	}
	else if ((x2 - x1) % (v1 - v2) === 0) {
		console.log("YES");
	}
	else {
		console.log("NO");
	}
	t = t - 1;
}
