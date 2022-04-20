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
for (let i = 0; i < n; i++) {
	let grade = parseInt(readLine());
	if (grade < 38) {
		console.log(grade);
	}
	else {
		if (grade % 5 === 0) {
			console.log(grade);
		}
		else {
			let nextMultiple = Math.ceil(grade / 5) * 5;
			if (nextMultiple - grade < 3) {
				console.log(nextMultiple);
			}
			else {
				console.log(grade);
			}
		}
	}
}
