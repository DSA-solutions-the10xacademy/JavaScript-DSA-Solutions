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
let numberOfInput = parseInt(readLine());
for (let index = 0; index < numberOfInput; index++) {
    let string = readLine();
    let length = string.length;
    if (length % 3 == 0 && length % 5 == 0) {
        console.log("foobar");
    }
    else if (length % 3 == 0) {
        console.log("foo");
    }
    else if (length % 5 == 0) {
        console.log("bar");
    }
    else {
        console.log("-");
    }
}
