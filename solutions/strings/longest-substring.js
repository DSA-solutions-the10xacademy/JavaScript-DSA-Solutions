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

let noOfInputs = parseInt(readLine());

for (let index = 0; index < noOfInputs; index++) {
    let inputString = readLine();

    let charLastOccurence = new Array(256);
    charLastOccurence.fill(-1);

    let leftPointer = 0, rightPointer = 0, maxLength = 0;
    while (rightPointer < inputString.length) {
        let currentChar = inputString[rightPointer];
        let charCode = currentChar.charCodeAt(0);
        leftPointer = Math.max(leftPointer, charLastOccurence[charCode] + 1);

        maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);

        charLastOccurence[charCode] = rightPointer;
        rightPointer++;
    }
    console.log(maxLength);
}