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
let arraySize = parseInt(readLine());
let array = [];
for (let index = 0; index < arraySize; index++) {
    array.push(parseInt(readLine()));
}

for (let currentIndex = 0; currentIndex < arraySize; currentIndex++) {
    let count = 0;
    for (let otherIndex = 0; otherIndex < arraySize; otherIndex++) {
        if (array[currentIndex] > array[otherIndex]) {
            count = count + 1;
        }
    }
    console.log(count);
}
