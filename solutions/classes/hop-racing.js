let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
const HopRacing = class {
  constructor() {
    this.currPosition = 0;
    this.numRounds = 0;
  }
  jumpPosition(jumpamount) {
    if (this.currPosition < 10) {
      this.numRounds += 1;
    }
    this.currPosition += jumpamount;
  }
  getPosition() {
    return this.currPosition;
  }
  getRounds() {
    return this.numRounds;
  }
};

var Num = parseInt(readLine());
const HopRacer1 = new HopRacing();
const HopRacer2 = new HopRacing();

for (let i = 0; i < Num; i++) {
  var input = readLine().split(" ");
  var [ID, hopamount] = [parseInt(input[0]), parseInt(input[1])];

  if (ID === 1) {
    HopRacer1.jumpPosition(hopamount);
  } else {
    HopRacer2.jumpPosition(hopamount);
  }
}

if (
  HopRacer1.getPosition() >= 10 &&
  HopRacer1.getRounds() <= HopRacer2.getRounds()
) {
  console.log(1);
} else if (
  HopRacer2.getPosition() >= 10 &&
  HopRacer1.getRounds() > HopRacer2.getRounds()
) {
  console.log(2);
}