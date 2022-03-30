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
    if (n == 1) return ["()"];
    if (n > 1) {
        let set = new Set();
        getAllBalancedParan(n - 1).forEach((combination) => {
            for (let index = 0; index < n; index++) {
                set.add(
                    combination.substring(0, index) + "()" + combination.substring(index)
                );
            }
        });
        n -= 1;
        return Array.from(set);
    }
}

// Do not edit anything below
let n = parseInt(readLine());
let allBalancedParan = getAllBalancedParan(n);
allBalancedParan.sort();
for (expr of allBalancedParan) {
    console.log(expr);
}
