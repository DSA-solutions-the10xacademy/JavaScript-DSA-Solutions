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

let lengthOfArray1 = parseInt(readLine());

let array1 = [];

for (let i = 0; i < lengthOfArray1; i++) {
    array1[i] = parseInt(readLine());
}

let lengthOfArray2 = parseInt(readLine());

let array2 = [];

for (let i = 0; i < lengthOfArray2; i++) {
    array2[i] = parseInt(readLine());
}

let lengthOfArray3 = parseInt(readLine());

let array3 = [];

for (let i = 0; i < lengthOfArray3; i++) {
    array3[i] = parseInt(readLine());
}

const array1Frequency = new Map();

for (let i = 0; i < lengthOfArray1; i++) {
    if (array1Frequency.has(array1[i])) {
        array1Frequency.set(array1[i], array1Frequency.get(array1[i]) + 1);
    } else {
        array1Frequency.set(array1[i], 1);
    }
}

const array2Frequency = new Map();

for (let i = 0; i < lengthOfArray2; i++) {
    if (array2Frequency.has(array2[i])) {
        array2Frequency.set(array2[i], array1Frequency.get(array2[i]) + 1);
    } else {
        array2Frequency.set(array2[i], 1);
    }
}

const array3Frequency = new Map();

for (let i = 0; i < lengthOfArray3; i++) {
    if (array3Frequency.has(array3[i])) {
        array3Frequency.set(array3[i], array1Frequency.get(array3[i]) + 1);
    } else {
        array3Frequency.set(array3[i], 1);
    }
}

let intersectionOfArrays = [];

for (let i = 1; i <= 2000; i++) {
    if (array1Frequency.has(i) && array2Frequency.has(i) && array3Frequency.has(i)) {
        intersectionOfArrays.push(i);
    }
}

if (intersectionOfArrays.length == 0) {
    console.log(-1);
} else {
    for (let i = 0; i < intersectionOfArrays.length; i++) {
        console.log(intersectionOfArrays[i]);
    }
}


