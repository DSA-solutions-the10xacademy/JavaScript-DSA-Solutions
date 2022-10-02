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
let array = readLine().split(" ");

let countFreq = new Map();
for (let index = 0; index < inputLength * 2 + 1; index++) {
    let currElement = array[index];
    currElement = parseInt(currElement);

    if (countFreq.has(currElement)) {
        let prevFreq = countFreq.get(currElement);
        countFreq.set(currElement, prevFreq + 1);
    } else {
        countFreq.set(currElement, 1);
    }
}

for (let element of countFreq.keys()) {
    if (countFreq.get(element) % 2 != 0) {
        console.log(element);
        break;
    }
}