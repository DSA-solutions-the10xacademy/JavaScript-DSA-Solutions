let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

let noOfInputs = parseInt(readLine());

for (let index = 0; index < noOfInputs; index++) {
    let inputString = readLine();

    let charArray = new Array(26);
    charArray.fill(0);

    for (let pointer = 0; pointer < inputString.length; pointer++) {
        let charCode = inputString[pointer].charCodeAt(0) - 'a'.charCodeAt(0);
        if (charArray[charCode] > 0) {
            charArray[charCode]--;
        } else {
            charArray[charCode]++;
        }
    }

    let noOfCharLeft = 0;
    for (let pointer = 0; pointer < 26; pointer++) {
        noOfCharLeft += charArray[pointer];
    }

    if (noOfCharLeft == 0 || noOfCharLeft == 1) {
        console.log(0);
    } else {
        console.log(noOfCharLeft - 1);
    }
}