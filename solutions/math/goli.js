let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let testCases = parseInt(readLine())
for (let index = 0; index < testCases; index++) {
    let [burger, soda, combo] = readLine().split(' ').map(Number)
    let result = burger + soda - combo
    console.log(result)
}