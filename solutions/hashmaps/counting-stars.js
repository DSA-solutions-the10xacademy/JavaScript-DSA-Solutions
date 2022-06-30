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
let testcases= parseInt(readLine());
while(testcases>0)
{
	let length = parseInt(readLine());
	string = readLine();
	let frequencyMap = new Map();
	let sum=0;
	for(let index=0;index<length;index++)
	{
		if(frequencyMap.has(string[index]))
		{
			let value=frequencyMap.get(string[index]);
			sum=sum+value;
			frequencyMap.set(string[index],value+1);
		}
		else
		{
			frequencyMap.set(string[index],1);
		}
	}
	console.log(sum);
	testcases = testcases-1;
}
