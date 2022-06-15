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
let numberOfHouses = parseInt(readLine());
let income = [];
for (let index = 0; index < numberOfHouses; index++) {
    income.push(parseInt(readLine()));
}
let numberOfChildren = [];
for (let index = 0; index < numberOfHouses; index++) {
    numberOfChildren.push(parseInt(readLine()));
}
let totalIncome = 0;
let requiredHouses = 0;
for (let index = 0; index < numberOfHouses; index++) {
    if (numberOfChildren[index] > 2) {
        totalIncome = totalIncome + income[index];
        requiredHouses = requiredHouses + 1;
    }
}
if (requiredHouses > 0) {
    let average = parseInt(totalIncome / requiredHouses);
    console.log(average);
}
else {
    console.log(-1);
}
