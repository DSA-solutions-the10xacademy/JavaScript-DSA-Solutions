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
let N = parseInt(readLine());
let Strings = [];
while (N--) {
    Strings.push(readLine());
}
let frequencyMap = new Map();
for (let character of Strings[0]) {
    if (frequencyMap.has(character)) {
        frequencyMap.set(character, frequencyMap.get(character) + 1);
    } else {
        frequencyMap.set(character, 1);
    }
}

for (let i = 1; i < Strings.length; i++) {
    let frequencyMap1 = new Map();
    for (let character of Strings[i]) {
        if (frequencyMap.has(character) && frequencyMap.get(character) > 0) {
            if (frequencyMap1.has(character)) {
                frequencyMap1.set(character, frequencyMap1.get(character) + 1);
            } else {
                frequencyMap1.set(character, 1);
            }
            frequencyMap.set(character, frequencyMap.get(character) - 1);
        }
    }
    frequencyMap = frequencyMap1;
}
let answer = [];
for (let key of frequencyMap.keys()) {
    answer.push(key)
}
answer.sort()
for (let character of answer) {
    console.log(character, frequencyMap.get(character))
}









