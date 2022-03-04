let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
function sumofdivisors(n){
    //Code here

    let requiredSum = 0;

    for(let i = 1; i <= (parseInt(Math.sqrt(n))+1); i++){
        if(n % i === 0){
            requiredSum += i;

            if(n / i !== i){
                requiredSum += n / i;
            }
        }
    }

    return requiredSum;
}
    

let n = parseInt(readLine())
console.log(sumofdivisors(n))