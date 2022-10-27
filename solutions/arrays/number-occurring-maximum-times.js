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
let noOfIntegers = parseInt(readLine());
let result = -1;
let array = [];
for(let index = 0 ; index < noOfIntegers ; index++){
	let integer = parseInt(readLine());
	if(array[integer] === undefined){
		array[integer] = 1;
	}else{
		array[integer] = array[integer] + 1;
	}
	if(array[integer]===4){
		result = integer;
		break;
	}
}
console.log(result);