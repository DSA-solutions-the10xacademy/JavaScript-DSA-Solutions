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
let totalStudents = parseInt(readLine());
let maleStudents = [];
let femaleStudents = [];
for (let index = 0; index < totalStudents; index++) {
	let temporaryArray = readLine().split(" ").map(Number);
	let gender = temporaryArray[0];
	let talent = temporaryArray[1];
	if (gender === 0) {
		femaleStudents.push(talent);
	}
	else {
		maleStudents.push(talent);
	}
}
femaleStudents.sort(function (a, b) { return b - a; });
maleStudents.sort(function (a, b) { return b - a; });
let answer = femaleStudents;
for (let index = 0; index < maleStudents.length; index++) {
	answer.push(maleStudents[index]);
}
for (let index = 0; index < totalStudents; index++) {
	console.log(answer[index]);
}
