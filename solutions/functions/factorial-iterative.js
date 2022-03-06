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

function factorial(num){
    if(num < 0) return "undefined";

    let result = 1;
    for(let i = 1; i <= num; i++){
        result = result * i;
    }

    return result;
}

let number = parseInt(readLine());

console.log(factorial(number))