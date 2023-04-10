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

let numberOfStrings = parseInt(readLine());
let commonAlphabets = {};

for (let i = 0; i < numberOfStrings; i++) {
    let currentString = readLine();
    let currentAlphabets = {};

    if (i == 0) {
        for (let j = 0; j < currentString.length; j++) {
            if (currentString[j] in commonAlphabets) {
                commonAlphabets[currentString[j]] = commonAlphabets[currentString[j]] + 1;
            } else {
                commonAlphabets[currentString[j]] = 1;
            }
        }
    } else {
        for (let j = 0; j < currentString.length; j++) {
            if (currentString[j] in currentAlphabets) {
                currentAlphabets[currentString[j]] = currentAlphabets[currentString[j]] + 1;
            } else {
                currentAlphabets[currentString[j]] = 1;
            }
        }

        for (let key in commonAlphabets) {
            if (key in currentAlphabets) {
                commonAlphabets[key] = Math.min(commonAlphabets[key], currentAlphabets[key]);
            } else {
                delete commonAlphabets[key];
            }
        }
    }


}
for (let i = 97; i < 123; i++) {
    let key = String.fromCharCode(i);
    if (key in commonAlphabets) {
        console.log(key + " " + commonAlphabets[key]);
    }
}
