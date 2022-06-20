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
let string = readLine().split(" ");
let answer = 0;
for (let index = 0; index < string.length; index++) {
    if (string[index].length > answer) {
        answer = string[index].length;
    }
}
console.log(answer);
