let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
//Write a function with name evenOddSeparator, you should exactly the same name
// This even_odd_separator functions should take a list of integers and return a list
// you can start from here	

function evenOddSeparator(list){
    let even = [];
    let odd = [];

    for(let i = 0; i < list.length; i++){
        if(list[i] % 2 === 0){
          even.push(list[i]);
        }
        else{
          odd.push(list[i]);
        }
    }

    return odd.concat(even);
}

/// Do not change anything below this line
function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each]);
  }
  
}



let numbers =readLine().split(" ");
ConvertToNumber(numbers);
let separated = evenOddSeparator(numbers);
for(num of separated){
  console.log(num);
}
