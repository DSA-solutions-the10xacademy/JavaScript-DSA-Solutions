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
let arr=readLine().split(' ');
let N=parseInt(arr[0]);
let K=parseInt(arr[1]);
arr=readLine().split(' ');
let sum=0;
for(let i=0;i<N;i++){
    arr[i]=parseInt(arr[i]);
    if(arr[i]===K){
        sum++;
    }
}
console.log(sum)