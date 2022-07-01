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
let numberOfPeople = parseInt(readLine());
let frequencyMap = new Map();

let peopleCovered = new Set();
for (let people = 0; people < numberOfPeople; people++) {
    let peopleAndChoice = readLine().trim().split(" ");
    if (!peopleCovered.has(peopleAndChoice[0])) {
        if (frequencyMap.has(peopleAndChoice[1])) {
            let value = frequencyMap.get(peopleAndChoice[1]);
            frequencyMap.set(peopleAndChoice[1], value + 1);
        }
        else {
            frequencyMap.set(peopleAndChoice[1], 1);
        }
        peopleCovered.add(peopleAndChoice[0]);
    }
}
let footballLovers = 0;
let favouriteSport = "";
let maximumLikedSportFrequency = 0;

for (let [key, value] of frequencyMap) {
    if (key === "football") {
        footballLovers = value;
    }
    if (value > maximumLikedSportFrequency) {
        maximumLikedSportFrequency = value;
        favouriteSport = key;
    }
}

console.log(favouriteSport);
console.log(footballLovers);
