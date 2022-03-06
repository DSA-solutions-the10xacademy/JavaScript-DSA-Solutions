let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------


function pivotIndex(arr){
    // Implement this function
    let leftSum = 0;
    let rightSum = 0;
    for(let i = 0; i < arr.length; i++){
        rightSum += arr[i];
    }

    let result = -1;
    for(let i = 0; i < arr.length; i++){
        rightSum -= arr[i];
        if(leftSum === rightSum){
            result = i;
            break;
        }
        leftSum += arr[i];
    }

    return result;
}


// Do not edit anything below
let numElems = parseInt(readLine());
let nums = [];
for(let i=0;i<numElems;i++){
  nums.push(parseInt(readLine()));
}
console.log(pivotIndex(nums));