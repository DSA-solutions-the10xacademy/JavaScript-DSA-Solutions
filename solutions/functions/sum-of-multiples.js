let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

//Write  your function here

function sum_of_multiples(list, multiple){

    let result = 0;
    
    for(let i = 0; i < list.length; i++){
        if(list[i] % multiple === 0){
            result += list[i];
        }
    }

    return result;
}


// DO NOT CHANGE ANYTHING BELOW THIS LINE
var range =parseInt(readLine())
var numbers=[]
for(let each=0;each<range;each++){
  numbers.push(parseInt(readLine()))
}
var mult=parseInt(readLine())
console.log(sum_of_multiples(numbers, mult))