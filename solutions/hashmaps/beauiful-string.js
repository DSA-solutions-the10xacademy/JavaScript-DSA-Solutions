let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in stringing format
let testcases=parseInt(readLine());
for(let i=0;i<testcases;i++){
  let string=readLine();
  let answer=0;
  let countDifferenceMap=new Map();
  let countOfA=0,countOfB=0,countOfC=0;
  countDifferenceMap.set("0 0",1);
  for(let i=0;i<string.length;i++){
    if(string[i]=='a') countOfA++;
    else if(string[i]=='b') countOfB++;
    else if(string[i]=='c') countOfC++;
    let currentDifference=(countOfA-countOfB)+" "+(countOfA-countOfC);
    if(countDifferenceMap.has(currentDifference)){
      answer+=countDifferenceMap.get(currentDifference);
      let count=countDifferenceMap.get(currentDifference);
      count++;
      countDifferenceMap.set(currentDifference,count);
    }else{
      countDifferenceMap.set(currentDifference,1);
    }
  }
  console.log(answer);
}
