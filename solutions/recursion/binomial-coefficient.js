let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------



function binomialCoefficient(n, r) {
    //Implement this function
    if (r > n) {
        return 0;
    }
    else if (r === 0 || n === r) {
        return 1;
    }
    else {
        return binomialCoefficient(n - 1, r - 1) + binomialCoefficient(n - 1, r);
    }
}

let testCases = parseInt(readLine());
for (let index = 0; index < testCases; index++) {
    let input = readLine().split(" ");
    n = parseInt(input[0]);
    let r = parseInt(input[1]);
    console.log(binomialCoefficient(n, r));
}
