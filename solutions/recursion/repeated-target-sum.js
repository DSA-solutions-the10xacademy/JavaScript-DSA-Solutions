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

function numberOfWays(elements, key, numberOfElements, currentIndex, currentSum, taken) {

    if (currentSum > key || currentIndex > numberOfElements) {
        return 0;
    }
    if (currentIndex == numberOfElements) {
        if (currentSum == key) {
            return 1;
        } else {
            return 0;
        }
    }

    let totalNumberOfWays = 0;

    if (!taken)
        totalNumberOfWays += numberOfWays(elements, key, numberOfElements, currentIndex + 1, currentSum, 0);

    totalNumberOfWays += numberOfWays(elements, key, numberOfElements, currentIndex + 1, currentSum + elements[currentIndex], 0);

    if (currentSum + elements[currentIndex] < key)
        totalNumberOfWays += numberOfWays(elements, key, numberOfElements, currentIndex, currentSum + elements[currentIndex], 1);

    return totalNumberOfWays;
}

let input = readLine().split(" ");

let numberOfElements = parseInt(input[0]);
let key = parseInt(input[1]);

let elements = readLine().split(" ");

for (let i = 0; i < numberOfElements; i++) {
    elements[i] = parseInt(elements[i]);
}

elements.sort();

let currentSum = 0;
let currentIndex = 0;
let taken = 0;

console.log(numberOfWays(elements, key, numberOfElements, currentIndex, currentSum, taken));