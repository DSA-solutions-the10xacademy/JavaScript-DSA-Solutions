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
let arraySize=parseInt(readLine());
let arr=[];
for(let index=0;index<arraySize;index++)
{
	arr.push(parseInt(readLine()));
}
let answer=-1;
for(let focusedIndex=0;focusedIndex<arraySize;focusedIndex++)
{
	let count=0;
	for(let currIndex=0;currIndex<arraySize;currIndex++)
	{
		if(arr[currIndex]>arr[focusedIndex])
		{
			count=count+1;
		}
	}
	if(count===arr[focusedIndex])
		{
			answer=1;
			break;
		}
}
console.log(answer);