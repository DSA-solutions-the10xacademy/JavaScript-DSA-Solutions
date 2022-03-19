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
function rotate(lst)
{
	
	let answer=[];
	for(let column=0;column<lst[0].length;column++)
	{
		let temporaryArray=[];
		for(let row=0;row<lst.length;row++)
		{
			temporaryArray.push(lst[row][column])
		}
		answer.push(temporaryArray);
	}
    for(let row=0;row<answer.length;row++)
    {
        for(let column=0;column<answer[0].length/2;column++)
        {
            let temporary = answer[row][column];
            answer[row][column]=answer[row][answer[0].length-1-column];
            answer[row][answer[0].length-1-column]=temporary;
        }
    }
	return answer;
}
let val = parseInt(readLine());
let lst = [];
for(let row=0;row<val;row++)
{
	let temporaryArray=readLine().split(" ");
	for(let index=0;index<temporaryArray.length;index++)
	{
		temporaryArray[index]=parseInt(temporaryArray[index]);
	}
	lst.push(temporaryArray);
    
}
console.log(lst[0].length);
let out=rotate(lst)
for(val of out){
	console.log(...val);
}