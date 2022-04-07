let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function sumOfFirstN(n) {
	//Implement this function
	let recursiveSum = 0;
	if (n === 1) {
		recursiveSum = 1;
	}
	else {
		recursiveSum = n + sumOfFirstN(n - 1);
	}
	console.log(n, recursiveSum);
	return recursiveSum;
}


let n = parseInt(readLine());
sumOfFirstN(n);
