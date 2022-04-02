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

function s(n){

    if(n <= 9){
        return n;
    }

    if(n % 2 == 0){
        return s(n-10);
    }

    return s(n-9);
}

let testCases = parseInt(readLine());

for(let i = 0; i < testCases; i++){
    let n = parseInt(readLine());

    console.log(s(n));
}