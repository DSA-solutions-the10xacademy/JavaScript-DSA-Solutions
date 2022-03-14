let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as change_diagonal and it should take list as input
function change_diagonal(arr)
{
	for(let row=0;row<arr.length;row++)
	{
		for(let column=0;column<arr.length;column++)
		{
			if(row===column)

			{
				if(arr[row][column]<0)
				{
					arr[row][column]=0
				}
				else
				{
					arr[row][column]=1
				}
			}
			

		}
	}
	return arr;
}


// Do not change anything below this line.
let val = parseInt(readLine())
let lst = []
for(let index=0;index<val;index++){
  let row=readLine().replace(/\r/g,'').split(' ')
  lst.push([...row])
}
let out = change_diagonal(lst)
for(row of out){
  console.log(...row)
}
