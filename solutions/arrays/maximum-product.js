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
let arrraySize = parseInt(readLine());
let firstNumber=parseInt(readLine());
let secondNumber;
let answer=-99999;
for(let index=0;index<arrraySize-1;index++)
{
	secondNumber=parseInt(readLine());
  answer=Math.max(answer,firstNumber*secondNumber);
  firstNumber=secondNumber;
}
console.log(answer);