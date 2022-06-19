let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
    idx++;
    return data[idx - 1];
}
// Do not edit above this line
// Code Here
class Cricketer {
    constructor() {
        this.cricketerName = "";
        this.cricketerAge = 0;
    }

    numberOfMatches() {
        return 25 * (this.cricketerAge - 18);
    }
}

class Batter extends Cricketer {
    constructor(cricketerName, cricketerAge, runs) {
        super();
        this.cricketerName = cricketerName;
        this.cricketerAge = cricketerAge;
        this.batterRun = runs;
    }

    batterAverage() {
        return this.batterRun / this.numberOfMatches();
    }
}

class Bowler extends Cricketer {
    constructor(cricketerName, cricketerAge, wicket) {
        super();
        this.cricketerName = cricketerName;
        this.cricketerAge = cricketerAge;
        this.bowlerWickets = wicket;
    }

    bowlerAverage() {
        return this.bowlerWickets / this.numberOfMatches();
    }
}

// Do not edit below this line
let cricketername = readLine();
let checktype = parseInt(readLine());
let age = parseInt(readLine());

// If type of player is batter
if (checktype === 1) {
    runs = parseInt(readLine());
    batter = new Batter(cricketername, age, runs);
    // Output the batter average fixed to 2 decimal places
    console.log(batter.batterAverage().toFixed(2));
}
// If player is of type bowler
else {
    wicket = parseInt(readLine());
    bowler = new Bowler(cricketername, age, wicket);
    // Output the bowler average fixed to 2 decimal places
    console.log(bowler.bowlerAverage().toFixed(2));
}