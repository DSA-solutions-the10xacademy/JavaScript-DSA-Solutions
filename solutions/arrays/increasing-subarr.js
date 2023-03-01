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

function convertToNumber(list){
    for(let i = 0; i < list.length; i++){
        list[i] = parseInt(list[i]);
    }

    return list;
}

let numberOfInputs = parseInt(readLine());
let list = readLine().split(" ");
list = convertToNumber(list);

let overallMaxLength = 1, currMaxLength = 1, endIndex = 0;

for(let i = 1; i < numberOfInputs; i++){
    if(list[i] > list[i-1]){
        currMaxLength++;
    }
    else{
        if(currMaxLength > overallMaxLength){
            overallMaxLength = currMaxLength;
            endIndex = i - 1;
        }
        currMaxLength = 1;
    }
}

if(currMaxLength > overallMaxLength){
    overallMaxLength = currMaxLength;
    endIndex = numberOfInputs - 1;
}

console.log(overallMaxLength, endIndex - overallMaxLength + 1, endIndex);