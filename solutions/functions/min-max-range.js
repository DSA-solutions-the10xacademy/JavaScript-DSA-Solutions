let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


// ## This function should return single integer. The integer should be maximum value of input list
// ## Please fill the following function
function maximumValue(inputNumbers){
    // write below this here
    let maxValue = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < inputNumbers.length; i++){
        if(inputNumbers[i] > maxValue){
            maxValue = inputNumbers[i];
        }
    }

    return maxValue;
}

// ## This function should return single integer. 
// ## The integer should be minimum value of input list
function minimumValue(inputNumbers){
    // Please write below this
    let minValue = Number.POSITIVE_INFINITY;
    for(let i = 0; i < inputNumbers.length; i++){
        if(inputNumbers[i] < minValue){ 
            minValue = inputNumbers[i];
        }
    }

    return minValue;
}


// ## This function should return list of integer which lies between m1 and m2. 
// ## if m1 <= m2 return list off numbers between m1 and m2
// ## if m2 <= m1 return list off numbers between m2 and m1
function getNumbersInRange(inputNumbers, m1, m2){
    // Please write below this line
    let minRange = Math.min(m1, m2);
    let maxRange = Math.max(m1, m2);

    let result = [];
    for(let i = 0; i < inputNumbers.length; i++){
        if(inputNumbers[i] >= minRange && inputNumbers[i] <= maxRange){
            result.push(inputNumbers[i]);
        }
    }

    if(result.length === 0){
        result.push(-1);
    }

    return result;
}

//  Please do not change anything below this line.
function ConvertToNumber(list){
    for(let each in list){
      list[each]=Number(list[each]);
    }
    return list;
}

let list1 = readLine().split(" ");
let list2 = readLine().split(" ");
let list3 = readLine().split(" ") ;  
ConvertToNumber(list1);
ConvertToNumber(list2);
ConvertToNumber(list3);
let m1 = minimumValue(list1);
let m2 = maximumValue(list2);
let minMaxRange = getNumbersInRange(list3, m1, m2);
console.log(...minMaxRange);