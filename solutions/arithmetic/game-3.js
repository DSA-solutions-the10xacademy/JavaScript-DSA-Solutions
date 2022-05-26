let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let t = parseInt(readLine());
while (t > 0) {
	let arr = readLine().split(" ");
	for (let i = 0; i < arr.length; i++) {
		arr[i] = parseInt(arr[i]);
	}
	let minimum = Math.min(arr[0],arr[1],arr[2]);
	let answer=minimum
	answer = answer + Math.ceil((arr[0]-minimum) / 2);
	answer = answer + Math.ceil((arr[1]-minimum)/ 2);
	answer = answer + Math.ceil((arr[2]-minimum) / 2);
	console.log(answer);
	t = t - 1;
}
