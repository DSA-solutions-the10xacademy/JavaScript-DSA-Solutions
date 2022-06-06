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

let array1Frequency = {};

for (let i = 0; i < lengthOfArray1; i++) {
    if (array1[i] in array1Frequency) {
        array1Frequency[array1[i]] = array1Frequency[array1[i]] + 1;
    } else {
        array1Frequency[array1[i]] = 1;
    }
}

let array2Frequency = {};

for (let i = 0; i < lengthOfArray2; i++) {
    if (array2[i] in array2Frequency) {
        array2Frequency[array2[i]] = array2Frequency[array2[i]] + 1;
    } else {
        array2Frequency[array2[i]] = 1;
    }
}

let array3Frequency = {};

for (let i = 0; i < lengthOfArray3; i++) {
    if (array3[i] in array3Frequency) {
        array3Frequency[array3[i]] = array3Frequency[array3[i]] + 1;
    } else {
        array3Frequency[array3[i]] = 1;
    }
}

let intersectionOfArrays = [];

for (let i = 1; i <= 2000; i++) {
    if (i in array1Frequency && i in array2Frequency && i in array3Frequency) {
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


