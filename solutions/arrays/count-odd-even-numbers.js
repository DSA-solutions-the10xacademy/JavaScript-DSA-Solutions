let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let lengthOfList = parseInt(readLine());
let evenCount = 0;
let oddCount = 0;
let array = [];
for(let index = 0 ; index < lengthOfList ; index++){
	let element = parseInt(readLine());
	array.push(element);
}
for(let index = 0 ; index < lengthOfList ; index++){
	if(array[index] % 2 === 0){
		evenCount = evenCount + 1;
	}else{
		oddCount = oddCount + 1;
	}
}
console.log(oddCount);
console.log(evenCount);