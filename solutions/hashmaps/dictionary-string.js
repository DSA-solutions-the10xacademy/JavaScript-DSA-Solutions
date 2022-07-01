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
let string = readLine();
let dictionary = readLine().split(" ");
let answer = 0;
for (let index = 0; index < dictionary.length; index++) {
    let dictionaryString = dictionary[index];
    let stringIndex = 0;
    let dictionaryStringIndex = 0;
    while (stringIndex < string.length && dictionaryStringIndex < dictionaryString.length) {
        if (string[stringIndex] == dictionaryString[dictionaryStringIndex]) {
            stringIndex = stringIndex + 1;
            dictionaryStringIndex = dictionaryStringIndex + 1;
        }
        else {
            stringIndex = stringIndex + 1;
        }
    }
    if (dictionaryStringIndex == dictionaryString.length) {
        answer = Math.max(answer, dictionaryString.length)
    }
}
console.log(answer);
