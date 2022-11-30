let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// to get trailling elements of zero requires 5 and 2, because
// with this two numbers trailing element as zero
// for example consider n as 5
// 5! is 120 i.e, prime factors are 1x2x3x2x2x5
// out of these prime factors there is one pair of 5 and 2 so, there is one trailling zero

// if number divisible by 10^k l.e(5*2)^k, has k trailing zeroes
// Trailing 0s in n! is equal to Count of 5s in prime factors of n!

let testCases = parseInt(readLine())
for (let index = 0; index < testCases; index++) {
    let number = parseInt(readLine())
    let result = 0;
    while (number >= 5) {
        number = parseInt(number / 5)
        result += number
    }
    console.log(result)
}