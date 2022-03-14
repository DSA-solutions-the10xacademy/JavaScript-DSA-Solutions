let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------





// you should return a list of lists
function transpose_matrix(lst){
	//implement this function
	let answer=[[]]
	for(let column=0;column<lst[0].length;column++)
	{
		let temporary=[]
		for(let row=0;row<lst.length;row++)
		{
			temporary.push(lst[row][column])
		}
		answer.push(temporary)
	}
	return answer
}



// do not change anything below this line
var h = parseInt(readLine())
let lst = []
for(let val=0;val<h;val++){
	var row=readLine().replace(/\r/g,'').split(" ")
	lst.push([...row])
}
let out = transpose_matrix(lst)
for(val of out){
	console.log(...val)
}
