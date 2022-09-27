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

let lenOfList = parseInt(readLine());

let arr = [];

for (i = 0; i < lenOfList; i++) {
    arr.push(parseInt(readLine()));
}
if (lenOfList == 0) {
    console.log(-1);
}
else {
    let maxCount = 0;
    let currCount = 1;

    for (i = 1; i < lenOfList; i++) {
        if (arr[i] == arr[i - 1]) {
            currCount++;
        }
        else {
            if (maxCount < currCount) {
                maxCount = currCount;
            }
            currCount = 1;
        }
    }
    if (currCount > maxCount) {
        maxCount = currCount;
    }
    let resultArr = [];
    currCount = 1;
    for (i = 1; i < lenOfList; i++) {
        if (arr[i] == arr[i - 1]) {
            currCount++;
        }
        else {
            if (maxCount == currCount) {
                resultArr.push(arr[i - 1]);
            }
            currCount = 1;
        }
    }
    if (maxCount == currCount) {
        resultArr.push(arr[lenOfList - 1]);
    }
    for (i = 0; i < resultArr.length; i++) {
        console.log(resultArr[i]);
    }
}