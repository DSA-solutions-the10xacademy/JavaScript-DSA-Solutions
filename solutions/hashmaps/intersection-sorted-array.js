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
    let frequency = {};

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] in frequency) {
            frequency[arr1[i]] = frequency[arr1[i]] + 1;
        } else {
            frequency[arr1[i]] = 1;
        }
    }

    let intersectionOfArrays = [];

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] in frequency) {
            if(frequency[arr2[i]] > 0){
                intersectionOfArrays.push(arr2[i]);
                frequency[arr2[i]]--;
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