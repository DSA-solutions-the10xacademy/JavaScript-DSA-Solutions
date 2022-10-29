let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let givenInteger = parseInt(readLine());
if(givenInteger%2 == 0){
	console.log("Even");
}else{
	console.log("Odd");
}