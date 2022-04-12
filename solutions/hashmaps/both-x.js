let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function bothCountX(string1, string2, x) {
    // Complete this function, and return the list of resultant characters in sorted order
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    var dictionary1 = {};
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] in dictionary1)
            dictionary1[string1[i]] = dictionary1[string1[i]] + 1;

        else
            dictionary1[string1[i]] = 1;
    }
    var dictionary2 = {};
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] in dictionary2)
            dictionary2[string2[i]] = dictionary2[string2[i]] + 1;

        else
            dictionary2[string2[i]] = 1;

    }
    let answer = [];
    for (let key in dictionary1) {
        if (key in dictionary2) {
            if (dictionary1[key] === x && dictionary2[key] === x) {
                answer.push(key);
            }
        }
    }
    answer.sort();
    return answer
}
let len = parseInt(readLine())
for (let i = 0; i < len; i++) {
    let [string1, string2, x] = readLine().split(" ")
    x = parseInt(x)
    console.log(...bothCountX(string1, string2, x))
}
