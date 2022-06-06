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
let arr = readLine().split(' ');
let dict = {};
for (let i = 0; i < n; i++) {
    let temporary = arr[i].split('');
    temporary.sort();

    if (temporary in dict) {
        dict[temporary] = dict[temporary] + 1;
    }
    else {
        dict[temporary] = 1;
    }
}
let maximumValue = 0;
for (let key in dict) {
    maximumValue = Math.max(maximumValue, dict[key]);
}
console.log(maximumValue);

