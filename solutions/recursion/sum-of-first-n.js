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
	if (n === 1) {
		return 1;
	}
	else {
		return n + sumOfFirstN(n - 1);
	}
}

let n = parseInt(readLine());
for (let number = 1; number <= n; number++) {
	console.log(number);
	console.log(sumOfFirstN(number));
}
