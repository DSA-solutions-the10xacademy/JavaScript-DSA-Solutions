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
let arr=readLine().split(" ");
for(let index=0;index<arr.length;index++)
{
	arr[index]=parseInt(arr[index]);
}
let count=0;
for(let focusedIndex=0;focusedIndex<arr.length;focusedIndex++)
{
	for(let comparedIndex=focusedIndex+1;comparedIndex<arr.length;comparedIndex++)
	{
		if(arr[focusedIndex]===arr[comparedIndex])
			{
				count = count+1;
			}
	}
}
console.log(count);