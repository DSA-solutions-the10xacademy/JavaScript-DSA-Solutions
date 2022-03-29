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

let testCases = parseInt(readLine());

for(let i = 0; i < testCases; i++){
    
    let n = parseInt(readLine());
    let nthTerm = 0;
    let num = 1;

    for(let j = 1; j <= n; j++){
        
        let operands = 0;
        let currentTerm = 1;
        while(operands < j){
            operands++;
            currentTerm *= num;
            num++;
        }

        nthTerm += currentTerm;
    }

    console.log(nthTerm);
}