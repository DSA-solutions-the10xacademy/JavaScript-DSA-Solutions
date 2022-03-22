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
let testCases = parseInt(readLine());
while (testCases > 0) {
    let arr = readLine().split(" ").map(Number);
    let evenPositionArray = [];
    let oddPositionArray = [];
    // storing values in even and odd indexing based arrays
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 === 0) {
            evenPositionArray.push(arr[index]);
        }
        else {
            oddPositionArray.push(arr[index]);
        }
    }
    // sorting odd index based array in ascending order using bubble sort
    for (let currIndex = 0; currIndex < oddPositionArray.length; currIndex++) {
        for (let nextIndex = currIndex + 1; nextIndex < oddPositionArray.length; nextIndex++) {
            if (oddPositionArray[currIndex] > oddPositionArray[nextIndex]) {
                let temporary = oddPositionArray[nextIndex];
                oddPositionArray[nextIndex] = oddPositionArray[currIndex];
                oddPositionArray[currIndex] = temporary;
            }
        }
    }
    //sorting even based array in descending order using bubble sort
    for (let currIndex = 0; currIndex < evenPositionArray.length; currIndex++) {
        for (let nextIndex = currIndex + 1; nextIndex < evenPositionArray.length; nextIndex++) {
            if (evenPositionArray[currIndex] < evenPositionArray[nextIndex]) {
                let temporary = evenPositionArray[nextIndex];
                evenPositionArray[nextIndex] = evenPositionArray[currIndex];
                evenPositionArray[currIndex] = temporary;
            }
        }
    }
    // generating answer array teking values from both even and odd indexs based arrays respectively.
    let answer = [];
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 == 0) {
            answer.push(evenPositionArray[parseInt(index / 2)]);
        }
        else {
            answer.push(oddPositionArray[parseInt(index / 2)]);
        }
    }
    for (let index = 0; index < answer.length; index++) {
        console.log(answer[index]);
    }
    testCases = testCases - 1;
}