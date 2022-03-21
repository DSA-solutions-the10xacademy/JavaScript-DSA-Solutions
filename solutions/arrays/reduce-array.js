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
let arraySize = parseInt(readLine())
let answer = parseInt(readLine());
for (let index = 1; index < arraySize; index++) {
	if (index % 2 === 0) {
		answer = answer - parseInt(readLine());
	}
	else if (index % 2 === 1) {
		answer = answer + parseInt(readLine());
	}
}
console.log(answer);
