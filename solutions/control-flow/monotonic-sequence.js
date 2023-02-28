let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let arraySize = parseInt(readLine());
let array=[];
for(let  index=0;index<arraySize;index++)
{
	array.push(parseInt(readLine()));
}
let isIncreasing=true;
let isDecreasing=true;
for(let index=1;index<arraySize;index++)
{
	if(array[index]<array[index-1])
	{
		isIncreasing=false;
	}
	if(array[index] > array[index-1])
	{
		isDecreasing=false;
	}
}
if(isDecreasing==false && isIncreasing==false)
{
	console.log(0);
}
else
{
	console.log(1);
}
