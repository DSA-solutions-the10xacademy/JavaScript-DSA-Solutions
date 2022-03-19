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
let N = parseInt(readLine());
if(N ===1)
{
	console.log(1);
}
else
{
	let prevRow=[1];
	for(let row=2;row<=N;row++)
	{
		let currRow=[];
		for(let column=1;column<=row;column++)
		{
			if(column===1)
			{
				currRow.push(prevRow[0]);
			}
			else if(column===row)
			{
				currRow.push(prevRow[prevRow.length-1]);
			}
			else
			{
				currRow.push(prevRow[column-1]+prevRow[column-2]);
			}
		}
		prevRow=currRow
	}
	for(let column=1;column<=N;column++)
	console.log(prevRow[column-1])
}