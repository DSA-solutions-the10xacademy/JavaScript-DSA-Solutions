let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function getAllBalancedParan(n) {
    // Implement this function
    let solution = []

    function generateParantheses(openCount, closeCount, string) {
        if (openCount > closeCount) {
            return;
        }
        if (!openCount && !closeCount) {
            solution.push(string);
        }
        if (openCount > 0) {
            generateParantheses(openCount - 1, closeCount, string + "(");
        }
        if (closeCount > 0) {
            generateParantheses(openCount, closeCount - 1, string + ")");
        }
    }
    generateParantheses(n, n, "");
    return solution;

}

// Do not edit anything below
let n = parseInt(readLine());
let allBalancedParan = getAllBalancedParan(n);
allBalancedParan.sort();
for (expr of allBalancedParan) {
    console.log(expr);
}
