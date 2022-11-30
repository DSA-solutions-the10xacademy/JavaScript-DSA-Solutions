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

let inputLength = parseInt(readLine());
let personExists = new Set();
let gamesCountMap = new Map();
let favGameFreq = 0;

for (let index = 0; index < inputLength; index++) {
    let personNameAndGame = readLine().split(" ");

    let personName = personNameAndGame[0], personGame = personNameAndGame[1];
    if (personExists.has(personName)) {
        continue;
    }
    personExists.add(personName);

    if (gamesCountMap.has(personGame)) {
        let freq = gamesCountMap.get(personGame);
        gamesCountMap.set(personGame, freq + 1);
    } else {
        gamesCountMap.set(personGame, 1);
    }
    favGameFreq = Math.max(favGameFreq, gamesCountMap.get(personGame));
}

let favGame = "", flag = false;

for (let game of gamesCountMap.keys()) {
    if (gamesCountMap.get(game) == favGameFreq) {
        if (flag) {
            if (game < favGame) {
                favGame = game;
            }
        } else {
            favGame = game;
            flag = true;
        }
    }
}

console.log(favGame);
if (!gamesCountMap.has("football")) {
    console.log(0);
} else {
    console.log(gamesCountMap.get("football"));
}