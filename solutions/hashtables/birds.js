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

let noOfSightings = parseInt(readLine());
let sightings = readLine().split(" ");

let sightFreq = new Map(), maxFreq = 0;
for (let index = 0; index < noOfSightings; index++) {
    let currElement = sightings[index];

    if (sightFreq.has(currElement)) {
        let prevFreq = sightFreq.get(currElement);
        sightFreq.set(currElement, prevFreq + 1);
    } else {
        sightFreq.set(currElement, 1);
    }

    maxFreq = Math.max(maxFreq, sightFreq.get(currElement));
}

let ans = -1;
for (let elem of sightFreq.keys()) {
    let elemFreq = sightFreq.get(elem);
    if (elemFreq == maxFreq) {
        if (ans == -1) {
            ans = elem;
        } else {
            if (elem < ans) {
                ans = elem;
            }
        }
    }
}

console.log(ans);
