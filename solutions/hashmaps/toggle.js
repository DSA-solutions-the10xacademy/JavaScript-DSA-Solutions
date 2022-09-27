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

let word = readLine();

let giveLowerCase = {};
let giveUpperCase = {};

for(let i = 97, j = 65 ; i < 123, j < 91; i++, j++){
    giveLowerCase[String.fromCharCode(j)] = String.fromCharCode(i);
    giveUpperCase[String.fromCharCode(i)] = String.fromCharCode(j);
}

let toggledWord = "";

for(let i=0; i<word.length; i++){
  if(word[i] >= 'A' && word[i] <= 'Z'){
    toggledWord += giveLowerCase[word[i]];
  } else {
    toggledWord += giveUpperCase[word[i]];
  }
}

console.log(toggledWord);
