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

let noOfSizes = parseInt(readLine());
let sizes = readLine().split(" ");

let sizeFreq = new Map();
for (let index = 0; index < noOfSizes; index++) {
    let currentSize = parseInt(sizes[index]);
    if (sizeFreq.has(currentSize)) {
        let prevFreq = sizeFreq.get(currentSize);
        sizeFreq.set(currentSize, prevFreq + 1);
    } else {
        sizeFreq.set(currentSize, 1);
    }
}

let totalAmount = 0;
let noOfBuyers = parseInt(readLine());
for (let index = 0; index < noOfBuyers; index++) {
    let buyerSizeAndAmount = readLine().split(" ");
    let buyerSize = parseInt(buyerSizeAndAmount[0]), buyerAmount = parseInt(buyerSizeAndAmount[1]);
    if (sizeFreq.has(buyerSize) && sizeFreq.get(buyerSize) > 0) {
        totalAmount += buyerAmount;

        let prevFreq = sizeFreq.get(buyerSize);
        sizeFreq.set(buyerSize, prevFreq - 1);
    }
}

console.log(totalAmount);