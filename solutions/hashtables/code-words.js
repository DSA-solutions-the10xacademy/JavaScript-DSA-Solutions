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

let inputLength = parseInt(readLine());
let charCodes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

for (let index = 0; index < inputLength; index++) {
    let words = readLine();
    words = words.trim();
    if (words.length == 0) {
        console.log(0);
        continue;
    }

    console.log(countTransformations(words.split(" ")));
}

function countTransformations(wordsArray) {
    let set = new Set();
    for (let wordIndex = 0; wordIndex < wordsArray.length; wordIndex++) {
        let word = wordsArray[wordIndex];

        let morseCode = "";
        for (let charIndex = 0; charIndex < word.length; charIndex++) {
            let charCode = word[charIndex].charCodeAt(0) - 'a'.charCodeAt(0);
            morseCode += charCodes[charCode];
        }
        set.add(morseCode);
    }
    return set.size;
}