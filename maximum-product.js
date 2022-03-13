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
let arrraySize = parseInt(readLine())
let arr=[]
for(let index=0;index<arrraySize;index++)
{
	arr.push(parseInt(readLine()))
}
let answer=arr[0]*arr[1]
for(let index=1;index<arrraySize;index++)
{
	answer=Math.max(answer,arr[index]*arr[index-1]);
}
console.log(answer);