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

// Do not change the function signature
// Fill in the function 
// string_to_repeat will be string like 'abc'
// repeat will be an int like 3
// return 'abc abc abc'

function stringRepeat(inputString, repeat){
    let resultString = "";

    for(let i = 1; i < repeat; i++){
        resultString += inputString + " ";
    }

    resultString += inputString;

    return resultString;
}

// Please don't change anything below this line.
// You don't have to worry about reading input, just fill the function above.

let input_string = readLine()
let input_number = parseInt(readLine())
console.log(stringRepeat(input_string, input_number))