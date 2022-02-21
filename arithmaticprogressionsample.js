let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

let first=parseInt(readLine())
let second=parseInt(readLine())
let third=parseInt(readLine())
const diff=third-second
const fourth=first + 3*diff
console.log(fourth)
