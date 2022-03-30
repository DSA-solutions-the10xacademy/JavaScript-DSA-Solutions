let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
function NumberOfWays(array, sum, index) {
    let arraySize = array.length;
    if (index === arraySize) {
        if (sum === 0) { return 1; }
        else {
            return 0;
        }
    }
    return NumberOfWays(array, sum, index + 1) + NumberOfWays(array, sum - array[index], index + 1) + NumberOfWays(array, sum + array[index], index + 1);
}
// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let sum = parseInt(readLine());
let arraySize = parseInt(readLine());
let array = readLine().split(" ").map(Number);
console.log(NumberOfWays(array, sum, 0))
