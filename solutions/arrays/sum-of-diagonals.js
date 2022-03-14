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
function sumOfDiagonals(N,matrix){
    //converting the string into number
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            matrix[i][j]=parseInt(matrix[i][j]);
        }
    }

    //starting diagonal
    let rowi=0;
    let coli=0;

    //ending diagonal
    let rowj=N-1;
    let colj=N-1;

    let sumDiagonal=0;
    while(rowi<N && coli<N && rowj>=0 && colj>=0 ){
        sumDiagonal+=matrix[rowi++][coli++]+matrix[rowj--][colj--];
    }
    return sumDiagonal;
}


let N=parseInt(readLine());
let matrix=[];
for(let rows=0;rows<N;rows++){
    matrix.push(readLine().split(' '))
}
console.log(sumOfDiagonals(N,matrix))
