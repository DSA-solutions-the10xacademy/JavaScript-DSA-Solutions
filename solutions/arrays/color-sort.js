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

let numberOfInputs = parseInt(readLine());

let list = [];
for(let i = 0; i < numberOfInputs; i++){
    list[i] = parseInt(readLine());
}

let counts = [0, 0, 0];
for(let i = 0; i < numberOfInputs; i++){
    counts[list[i]] += 1;
}

for(let i = 0; i < numberOfInputs; i++){
    if(i < counts[0]){
        list[i] = 0;
    }
    else if(i < (counts[0] + counts[1])){
        list[i] = 1;
    }
    else{
        list[i] = 2;
    }
}

for(let i = 0; i < numberOfInputs; i++){
    console.log(list[i]);
}