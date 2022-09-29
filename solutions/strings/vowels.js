let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

let stringLength = parseInt(readLine());

let inputString = readLine();

let vowels = new Array(5);
vowels.fill(0);

for (let index = 0; index < stringLength; index++) {
    let currentChar = inputString[index];

    if (currentChar == 'a') {
        vowels[0] = 1;
    } else if (currentChar == 'e') {
        vowels[1] = 1;
    } else if (currentChar == 'i') {
        vowels[2] = 1;
    } else if (currentChar == 'o') {
        vowels[3] = 1;
    } else if (currentChar == 'u') {
        vowels[4] = 1;
    }
}

let allVowelsExists = 'YES';

for (let index = 0; index < 5; index++) {
    if (vowels[index] == 0) {
        allVowelsExists = 'NO';
        break;
    }
}

console.log(allVowelsExists);