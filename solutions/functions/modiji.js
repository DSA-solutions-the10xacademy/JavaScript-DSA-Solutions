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

function calculateTotalFund(salaries, peopleCount){
    let funds = 0;
    for(let i = 0; i < peopleCount; i++){
        funds += Math.ceil((7*salaries[i])/100);
    }
    return funds;
}

function Convert_to_Number(list){
    for(let each in list){
        list[each]=Number(list[each])
    }
}

let peopleCount = parseInt(readLine());
let salaries = readLine().split(" ");
Convert_to_Number(salaries);
let totalFund = calculateTotalFund(salaries, peopleCount);
console.log(totalFund);