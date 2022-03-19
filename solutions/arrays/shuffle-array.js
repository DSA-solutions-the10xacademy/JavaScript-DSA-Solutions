let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function shuffle(arr){
    //Implement this function
	let leftIndex=0;
	let rightIndex=arr.length/2;
	let answer=[];
	while(leftIndex < arr.length/2)
	{
		answer.push(arr[leftIndex]);
		answer.push(arr[rightIndex]);
		leftIndex = leftIndex+1;
		rightIndex = rightIndex+1;
	}
	return answer;
}

// Do not edit anything below
let n = parseInt(readLine())
let nums = []
for(let index=0;index<2*n;index++){
        nums.push(parseInt(readLine()))
}
let res=shuffle(nums)
for(elem of res){
  console.log(elem)
}