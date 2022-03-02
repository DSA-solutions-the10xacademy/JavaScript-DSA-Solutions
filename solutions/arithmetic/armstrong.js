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

let num = parseInt(readLine());
let copyOfNum = num;

let lastDigit = copyOfNum % 10;
copyOfNum = parseInt(copyOfNum / 10);

let secondLastDigit = copyOfNum % 10;
copyOfNum = parseInt(copyOfNum / 10);

let thirdLastDigit = copyOfNum;

let armStrongValue = lastDigit ** 3 + secondLastDigit ** 3 + thirdLastDigit ** 3;

if(armStrongValue === num){
    console.log("Yes");
}else{
    console.log("No");
}