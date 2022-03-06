let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Fill in the following function.
// Please do not change the function name.
function signum(number){
    // you can start from here.
    let result;
    if(number > 0){
        result = 1;
    }else if(number < 0){
        result = -1;
    }else{
        result = 0;
    }

    return result;
}

// Please do not edit the code below this line.

let testInput = parseFloat(readLine());
console.log(signum(testInput));