let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let inputLength = parseInt(readLine());

for (let index = 0; index < inputLength; index++) {
    let inputString = readLine();

    let compressString = "";
    let pointer = 0, countChar = 1;

    while (pointer < inputString.length) {
        let currentChar = inputString[pointer];
        let nextChar = inputString[pointer + 1];

        if (currentChar == nextChar) {
            countChar++;
        } else {
            compressString += currentChar

            if (countChar > 1) {
                compressString += countChar;
            }
            countChar = 1;
        }

        pointer++;
    }

    console.log(compressString);
}