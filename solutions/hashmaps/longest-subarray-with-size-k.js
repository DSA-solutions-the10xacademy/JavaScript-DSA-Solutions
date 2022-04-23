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

let nAndK = readLine().split(' ');
let n = parseInt(nAndK[0]);
let k = parseInt(nAndK[1]);
let arr = readLine().split(' ');
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(arr[i]);
}
let answer = 0;
let dict = {};
let sum = 0;
for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
    if (sum === k) {
        answer = i + 1;
    }
    if ((sum - k) in dict) {
        answer = Math.max(answer, i - dict[sum - k]);
    }
    if (!(sum in dict)) {
        dict[sum] = i;
    }
}
console.log(answer);
