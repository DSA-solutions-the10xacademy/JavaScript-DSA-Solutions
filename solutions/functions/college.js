let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
function sumOfDivisors(n){
  //Code here

    let requiredSum = 0;

    let endValue = Math.floor(Math.sqrt(n)) + 1;
    for(let i = 1; i <= endValue; i++){
        if(n % i === 0){
            requiredSum += i;

            // If i is a factor of n, then n/i is also a factor of n.
            // This if condition is to make sure, we are not counting same factor twice.
            if(n / i !== i){
                requiredSum += n / i;
            }
        }
    }

    return requiredSum;
}
    

let n = parseInt(readLine());
console.log(sumOfDivisors(n));