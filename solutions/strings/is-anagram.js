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

let inputStringA = readLine();
let inputStringB = readLine();

let totalChars = 256;

let countCharA = new Array(totalChars);
let countCharB = new Array(totalChars);

countCharA.fill(0);
countCharB.fill(0);

let isAnagram = 1;
for (let index = 0; index < inputStringA.length && inputStringB.length; index++) {
    let stringAChar = inputStringA[index].charCodeAt(0);
    let stringBChar = inputStringB[index].charCodeAt(0);

    countCharA[stringAChar]++;
    countCharB[stringBChar]++;
}

if (inputStringA.length != inputStringB.length) {
    isAnagram = 0;
}

for (let index = 0; index < totalChars; index++) {
    if (countCharA[index] != countCharB[index]) {
        isAnagram = 0;
        break;
    }
}

console.log(isAnagram);
