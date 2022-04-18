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

let numOfStudents = parseInt(readLine());
let marks = readLine();
marks = marks.split(" ");

let sumOfMarks = 0;

for(let i = 0; i < numOfStudents; i++){
    sumOfMarks += parseInt(marks[i]);
}

let mean = sumOfMarks / numOfStudents;

console.log(Math.floor(mean));