let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and
let arraySize=  parseInt(readLine());
let arr=readLine().split(" ");
for(let index=0;index<arraySize;index++)
{
	arr[index]=parseInt(arr[index]);
}
arr.sort(function(a,b) {return a-b});
let map= new Map();
for(let index=0;index<arraySize;index++)
{
	if(map.has(arr[index]))
	{
		let value= map.get(arr[index]);
		value++;
		map.set(arr[index],value);
	}
	else{
		map.set(arr[index],1);
	}

}
let maxValue=arr[arraySize-1];
let maxCount=map.get(arr[arraySize-1]);
let count =0;
for(let value=maxValue-1;value>=1;value--)
{
	if(map.has(value))
	{
		if(map.get(value)>maxCount)
		{
			maxCount=map.get(value);
		}
		else
		{
			count+=maxCount-map.get(value);
		}


	}
	else
	{
		count+=maxCount;
	}
}
if(count===0)
{
    console.log(map.get(1));
    let finalAnswer=[];
while(map.size>0)
{
    
	let ans=[];
	for(let [key,value] of map)
	{
		ans.push(key);
		value--;
		if(value==0)
		map.delete(key);
        else
        map.set(key,value);
	}
	finalAnswer.push(ans);
}
finalAnswer.sort();
for(let index=0;index<finalAnswer.length;index++)
console.log(...finalAnswer[index])

}
else
{
	console.log(count);
}
