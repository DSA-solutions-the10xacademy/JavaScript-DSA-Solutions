let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// You should name your function as differenceOfSumOfEvenOddIndexnumbers
// It should take a list of integers
// Return an integer

function differenceOfSumOfEvenOddIndexnumbers(list){
    let sumOfEvenIndex = 0;
    let sumOfOddIndex = 0;

    for(let i = 0; i < list.length; i++){
        if(i%2 === 0){
            sumOfEvenIndex += list[i];
        }else{
            sumOfOddIndex += list[i];
        }
    }

    return (sumOfEvenIndex - sumOfOddIndex);
}

// Do not change anything below this line
function ConvertToNumber(list){
    for(let each in list){
        list[each]=Number(list[each]);
    }
    
}


let numbers =readLine().split(" ");
ConvertToNumber(numbers);
console.log(differenceOfSumOfEvenOddIndexnumbers(numbers));