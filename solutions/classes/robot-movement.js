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
const RobotMovement = class {
  constructor() {
    this.xcoordinate = 0;
    this.ycoordinate = 0;
  }
  moveUp() {
    this.ycoordinate += 1;
  }
  moveDown() {
    this.ycoordinate -= 1;
  }
  moveRight() {
    this.xcoordinate += 1;
  }
  moveLeft() {
    this.xcoordinate -= 1;
  }
};

var Num = parseInt(readLine());
const myRobotmove = new RobotMovement();
for (let i = 0; i < Num; i++) {
  var currmovement = readLine();
  if (currmovement === "up") {
    myRobotmove.moveUp();
  } else if (currmovement === "down") {
    myRobotmove.moveDown();
  } else if (currmovement === "left") {
    myRobotmove.moveLeft();
  } else {
    myRobotmove.moveRight();
  }
}
console.log(myRobotmove.xcoordinate);
console.log(myRobotmove.ycoordinate);