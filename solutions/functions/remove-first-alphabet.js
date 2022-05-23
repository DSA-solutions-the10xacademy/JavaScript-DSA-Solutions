let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Write function with name removeFirstAlphabet which takes a list of string
// Remove first letter from each string and return the list

function removeFirstAlphabet(list){

    for(let i = 0; i < list.length; i++){
        list[i] = list[i].substring(1);
    }

    return list;
}

// Do not change anything below this line
let alpha =readLine()
alpha = alpha.split(' ')
let removedList = removeFirstAlphabet(alpha)
for(let i of removedList){
  console.log(i)
}