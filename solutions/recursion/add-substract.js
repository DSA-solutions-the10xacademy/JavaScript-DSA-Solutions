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
function numberOfWays(array, sum, index) {
    let arraySize = array.length;
    if (index === arraySize) {
        if (sum === 0) { 
			return 1; 
		}
        else {
            return 0;
        }
    }
    return numberOfWays(array, sum, index + 1) + numberOfWays(array, sum - array[index], index + 1) + numberOfWays(array, sum + array[index], index + 1);
}
// -------- Do NOT edit anything below this line ----------
let sum = parseInt(readLine());
let arraySize = parseInt(readLine());
let array = readLine().split(" ");
for (let i = 0; i < arraySize; i++){
	array[i] = parseInt(array[i]);
}
console.log(numberOfWays(array, sum, 0))
