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
function reverse(string) {
    if (string === "") {
        return "";
    }
    return string[string.length - 1] + reverse(string.substr(0, string.length - 1));
}
let n = parseInt(readLine());
for (let testCase = 0; testCase < n; testCase++) {
    let string = readLine();
    let answer = reverse(string);
    console.log(answer);
}
