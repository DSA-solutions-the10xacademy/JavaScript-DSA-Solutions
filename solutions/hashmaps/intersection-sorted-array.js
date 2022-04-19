let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function intersect(arr1, arr2) {
    // implement this function
    let array1Frequency = {};

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] in array1Frequency) {
            array1Frequency[arr1[i]] = array1Frequency[arr1[i]] + 1;
        } else {
            array1Frequency[arr1[i]] = 1;
        }
    }

    let array2Frequency = {};

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] in array2Frequency) {
            array2Frequency[arr2[i]] = array2Frequency[arr2[i]] + 1;
        } else {
            array2Frequency[arr2[i]] = 1;
        }
    }

    let intersectionOfArrays = [];

    for (let key in array1Frequency) {
        if (key in array2Frequency) {
            let numberOfCommonAppearances = Math.min(array1Frequency[key], array2Frequency[key]);
            while (numberOfCommonAppearances--) {
                intersectionOfArrays.push(key);
            }
        }
    }

    if (intersectionOfArrays.length == 0) {
        return [-1];
    } 

    return intersectionOfArrays;
}


// DO NOT change anything below this line
let lenOfArr1 = parseInt(readLine());
let arr1 = [];
for (let index = 0; index < lenOfArr1; index++) {
    arr1.push(parseInt(readLine()));
}
let lenOfArr2 = parseInt(readLine());
let arr2 = [];
for (let index = 0; index < lenOfArr2; index++) {
    arr2.push(parseInt(readLine()));
}

let intersectionOFArrays = intersect(arr1, arr2);
for (let index = 0; index < intersectionOFArrays.length; index++) {
    console.log(intersectionOFArrays[index]);
}