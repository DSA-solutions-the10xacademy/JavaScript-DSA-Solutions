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

let totalNumberOfSocks = parseInt(readLine());

let socks = readLine().split(" ");

for (let i = 0; i < totalNumberOfSocks; i++) {
    socks[i] = parseInt(socks[i]);
}

let colorFrequency = {};

for (let i = 0; i < totalNumberOfSocks; i++) {
    if (socks[i] in colorFrequency) {
        colorFrequency[socks[i]] = colorFrequency[socks[i]] + 1;
    } else {
        colorFrequency[socks[i]] = 1;
    }
}

let pairsOfSocks = 0;

for(let color in colorFrequency){
    pairsOfSocks += parseInt(colorFrequency[color] / 2);
}

console.log(pairsOfSocks);


