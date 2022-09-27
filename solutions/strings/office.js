let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let personNames = readLine().split(" ");
let personHappinessRatings = readLine().split(" ");

let totalPersons = personNames.length;
let sumOfHappiness = 0;

for (let index = 0; index < totalPersons; index++) {
    if (personNames[index] == 'Boss' || personNames[index] == 'boss') {
        sumOfHappiness += 2 * parseInt(personHappinessRatings[index]);
    } else {
        sumOfHappiness += parseInt(personHappinessRatings[index]);
    }
}

let averageHappiness = sumOfHappiness / totalPersons;

if (averageHappiness > 5) {
    console.log("I still have a job");
} else {
    console.log("They fired me");
}