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

function f(operands, num, n){

    if(operands == n+1)
        return 0;

    let currentTerm = 1;

    for(let i = 1; i <= operands; i++){
        currentTerm *= num;
        num++;
    }

    return currentTerm + f(operands+1, num, n);
}

let testCases = parseInt(readLine());

for(let i = 0; i < testCases; i++){
    
    let n = parseInt(readLine());
    
    console.log(f(1,1,n));
}