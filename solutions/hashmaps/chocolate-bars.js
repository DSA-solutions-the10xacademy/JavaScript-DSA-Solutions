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
function calculateDivisors(number)
{
	let count=0;
	for(let integer=1;integer<=number;integer++)
	{
		if(number%integer==0)
		{
			count=count+1;
		}
	}
	return count;
}

let numberOfChocolates= parseInt(readLine());
let chocolateLength = readLine().split(" ");
let numberWithSameCountOFDivisorsMap = new  Map();
for(let index=0;index<numberOfChocolates;index++)
{
	let divisors= calculateDivisors(parseInt(chocolateLength[index]));
	if(numberWithSameCountOFDivisorsMap.has(divisors))
	{
		let value=numberWithSameCountOFDivisorsMap.get(divisors);
		numberWithSameCountOFDivisorsMap.set(divisors,value+1);
	}
	else
	{
		numberWithSameCountOFDivisorsMap.set(divisors,1);
	}
}
let answer=0;
for(let [key,value] of numberWithSameCountOFDivisorsMap)
{
	answer = answer + (value*(value-1))/2
}
console.log(answer);
