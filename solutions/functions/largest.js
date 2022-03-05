let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function largestElement(A){
    // Code here

    let largest = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < A.length; i++){
        if(A[i] > largest){
            largest = A[i];
        }
    }

    return largest;
}

// --------- Do NOT edit Below this line -----------
function Convert_to_Number(list){
  for(let each in list){
      list[each]=Number(list[each])
  } 
}

let n = parseInt(readLine())
let A=readLine().split(" ")
Convert_to_Number(A)
console.log(largestElement(A))