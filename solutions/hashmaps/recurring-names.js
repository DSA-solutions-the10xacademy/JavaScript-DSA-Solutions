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
let k= parseInt(readLine());
let names= readLine().split(" ");
let nameFrequency = new Map();
for(let index=0;index<names.length;index++)
{
	if(nameFrequency.has(names[index]))
	{
		let frequency = nameFrequency.get(names[index]);
		nameFrequency.set(names[index],frequency+1);
	}
	else
	{
		nameFrequency.set(names[index],1);
	}
}
let answer=[];
for(let [key,value] of nameFrequency)
{
	if(value > k)
	{
		answer.push(key);
	}
}
answer.sort();
if(answer.length==0)
{
	console.log("no such names in this town!!!")
}
else{
for(let answerIndex=0;answerIndex<answer.length;answerIndex++)
{
	console.log(answer[answerIndex]);
}
}
