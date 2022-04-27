let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let no_of_dials = parseInt(readLine());
let max_dials = parseInt(readLine());
let no_of_inputs = parseInt(readLine());

let input_arr = [];
for (let i = 0; i < no_of_inputs; i++) {
  input_arr.push(parseInt(readLine()));
}

let result = 0;

//initiate dial_arr with 0
let dial_arr = [];
for (let i = 0; i <= no_of_dials; i++) {
  dial_arr.push(0);
}

for (let i = 0; i < no_of_inputs; i++) {
  let input = input_arr[i];
  dial_arr[input]++;
  if (dial_arr[input] == max_dials) {
    result = input;
    break;
  }
}

console.log(result);
