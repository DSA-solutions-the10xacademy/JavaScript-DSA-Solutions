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

let rows = parseInt(readLine());

let matrix = [];
for(let i = 0; i < rows; i++){
    let eachRow = readLine().split(" ");
    eachRow = convertToNumber(eachRow);
    matrix.push(eachRow);
}

let sumFirstDiagonal = 0;
let sumSecondDiagonal = 0;

for(let i = 0; i < matrix.length; i++){
    let j = i;
    sumFirstDiagonal += matrix[i][j];
}

for(let i = 0; i < matrix.length; i++){
    let j = matrix.length - 1 - i;
    sumSecondDiagonal += matrix[i][j];
}

console.log(sumFirstDiagonal + sumSecondDiagonal);