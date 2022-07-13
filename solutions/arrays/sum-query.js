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

let firstArray=readLine().split(" ")
let arraySize=parseInt(firstArray[0])
let numberOfQuery=parseInt(firstArray[1])
let arr=readLine().split(" ")
for(let index=0;index<arraySize;index++)
{
	arr[index]=parseInt(arr[index])
}
let sum=[]
sum.push(arr[0]);
let lastSum=arr[0]
for(let index=1;index<arraySize;index++)
{
	sum.push(lastSum+arr[index]);
	lastSum = lastSum + arr[index]
}
// console.log(sum)
for(let query=0;query<numberOfQuery;query++)
{
	let indexes=readLine().split(" ").map(Number)
    // console.log(indexes);
    let rightSum=sum[indexes[1]-1]
    let leftSum;
    if(indexes[0]===1)
    leftSum=0;
    else
    leftSum=sum[indexes[0]-2]
	console.log(rightSum-leftSum)

}
