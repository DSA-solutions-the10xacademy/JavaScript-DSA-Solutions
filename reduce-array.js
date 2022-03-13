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
let arraySize=parseInt(readLine())
let arr=[]
for(let index=0;index<arraySize;index++)
{
	arr.push(parseInt(readLine()))
}
if(arraySize===1)
{
	console.log(arr[0])
}
else
{
	let answer=arr[0]+arr[1];
	for(let index=2;index<arraySize;index++)
	{
		if(index%2===0)
		{
			answer=answer-arr[index]
		}
		else if(index%2===1)
		{
			answer=answer+arr[index]
		}
		
	}
	console.log(answer)
}