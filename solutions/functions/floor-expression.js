let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
function sumofproduct(n){
    //Code here
    
    let result = 0;
    for(let x = 1; x <= n; x++){
        let y = Math.floor(n / x);
        result += x * y;
    }

    return result;
}

let n = parseInt(readLine())
console.log(sumofproduct(n))