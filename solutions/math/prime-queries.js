let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// As Maximum Query number is given so, queries lies between zero to maximul query number.
// Initially take an array filled with 1's with length of maximun range.
// then update non-prime positions with zero's, as we know prime that is divisible by itself and one
// number that was multiplied with another is not a prime, update non-prime positions with zero's with this logic
// finally we get array with 1's at prime positions and 0's at non prime positions
// do cummulative sum to the array to get number of primes to be there before to that positions
// at the end log the value that was present at the position of the each query

let [Nmax, Nqueries] = readLine().split(" ").map(Number);
// Taking array that filled with 1's with length of maximum query number
let primes = new Array(Nmax + 1).fill(1);
// updating initial non-prime positions with zero's
primes[0] = 0;
primes[1] = 0;
let position = 2;
// updating positions that was multiplied with another with 0's
while (position * position <= Nmax) {
    // Start from prime postion on wards to avoid more time complexity
    if (primes[position] == 1) {
        for (let idx = position * position; idx < Nmax + 1; idx = idx + position) {
            primes[idx] = 0;
        }
    }
    position += 1;
}
// Cummulative sum of array to find number of primes present that lies before to that particular position
for (let jIndex = 1; jIndex < primes.length; jIndex++) {
    primes[jIndex] = primes[jIndex] + primes[jIndex - 1];
}
// Reading queries to log number of primes present before that query number
for (let kIndex = 0; kIndex < Nqueries; kIndex++) {
    let Query = parseInt(readLine());
    console.log(primes[Query]);
}
