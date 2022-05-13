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
let n = parseInt(readLine());

// First let us find the smallest number
let runningMin = parseInt(readLine());
for(let index = 1; index < n; index++) {
	let currNum = parseInt(readLine());
	runningMin = Math.min(runningMin, currNum);
}

// runningMin will now contain the smallest number
// Let us now compute the sum of the digits of runningMin
let sumOfDigits = 0;
while(runningMin > 0) {
	let lastDigit = runningMin % 10;
	sumOfDigits = sumOfDigits + lastDigit;
	runningMin = parseInt(runningMin/10);
}

if(sumOfDigits % 2 === 0) {
	console.log(1);
} else {
	console.log(0);
}
