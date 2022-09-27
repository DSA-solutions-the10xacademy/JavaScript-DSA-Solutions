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

let inputString = readLine();

inputString = inputString.toLowerCase();

let leftPointer = 0, rightPointer = inputString.length - 1;

let isPallindrome = "YES";

while (leftPointer < rightPointer) {
    let leftChar = inputString[leftPointer];
    let rightChar = inputString[rightPointer];

    if (leftChar != rightChar) {
        isPallindrome = "NO";
        break;
    }
    leftPointer++;
    rightPointer--;
}

console.log(isPallindrome);