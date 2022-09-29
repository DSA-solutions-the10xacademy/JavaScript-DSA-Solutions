let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let numberOfDails = parseInt(readLine());
let maxDialLimit = parseInt(readLine());
let dials = parseInt(readLine());
let dialsArray = [];
let result = 0;
for(let index = 0 ; index < dials ; index++){
	let dial = parseInt(readLine());
	if(dialsArray[dial] === undefined){
		dialsArray[dial] = 1;
	}else{
		dialsArray[dial] = dialsArray[dial]+1;
	}
	if(dialsArray[dial] === maxDialLimit){
		result = dial;
		break;
	}
}
console.log(result);