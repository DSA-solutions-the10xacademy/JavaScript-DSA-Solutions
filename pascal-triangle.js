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
let rowNumber = parseInt(readLine())
if(rowNumber ===1)
{
	console.log(1);
}
else
{
	let arr=[1]
	for(let row=2;row<=rowNumber;row++)
	{
		let temporaryArray=[]
		for(let column=1;column<=row;column++)
		{
			if(column===1)
			temporaryArray.push(arr[0]);
			else if(column===row)
			temporaryArray.push(arr[arr.length-1])
			else
			temporaryArray.push(arr[column-1]+arr[column-2])
		}
		arr=temporaryArray
	}
	for(let column=1;column<=rowNumber;column++)
	console.log(arr[column-1])
}