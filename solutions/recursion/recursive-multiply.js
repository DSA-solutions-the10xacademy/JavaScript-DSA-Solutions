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
function productOfDigits(n) {
    if(n<10)
    {
        return n;
    }
    else{
    let rightMostDigit = n % 10;
    let remainingNumber = parseInt(n / 10);
    return rightMostDigit * productOfDigits(remainingNumber );}
}
let numTests = parseInt(readLine());
for (let testIndex = 0; testIndex < numTests; testIndex++) {
    let n = parseInt(readLine());
    let answer = productOfDigits(Math.abs(n));
    console.log(answer);
}
