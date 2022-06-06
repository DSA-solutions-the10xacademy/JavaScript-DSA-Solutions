let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// This function should return a function which takes string as input 
// removes all the alphabets which are present in the forbidden_alphabets list
// forbidden_alphabets is a list off alphabets
// Your returned function should take string as input returns a string 
// by removing forbidden alphabets
function word_smith(forbidden_alphabets){
    // You can start from here
    let alphabetSet = new Set(forbidden_alphabets);

    function chopper(givenString){
        let result = "";
        for(let i = 0; i < givenString.length; i++){
            if(!alphabetSet.has(givenString[i])){
                result += givenString[i];
            }
        }

        return result;
    }

    return chopper
}

// Do not change anything below this line.
var alphabets=readLine()
alphabets = alphabets.split(' ')
var input_string = readLine()
chopper = word_smith(alphabets)
console.log(chopper(input_string))