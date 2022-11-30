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

let inputLength = parseInt(readLine());
let array = [];

for (let index = 0; index < inputLength; index++) {
    let num = parseInt(readLine());
    array.push(num);
}

let copyArray = [...array];
copyArray.sort((a, b) => a - b);

let map = new Map();
for (let index = 0; index < inputLength; index++) {
    if (!map.has(copyArray[index])) {
        map.set(copyArray[index], index);
    }
}

for (let index = 0; index < inputLength; index++) {
    copyArray[index] = map.get(array[index]);
    console.log(copyArray[index]);
}