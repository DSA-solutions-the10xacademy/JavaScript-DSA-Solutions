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
class RobotMovement {
  constructor() {
    this.xCoordinate = 0;
    this.yCoordinate = 0;
  }
  moveUp() {
    this.yCoordinate += 1;
  }
  moveDown() {
    this.yCoordinate -= 1;
  }
  moveRight() {
    this.xCoordinate += 1;
  }
  moveLeft() {
    this.xCoordinate -= 1;
  }
};

var Num = parseInt(readLine());
let myRobotMove = new RobotMovement();
for (let index = 0; index  < Num; index ++) {
  var currentMovement = readLine();
  if (currentMovement === "up") {
    myRobotMove.moveUp();
  } else if (currentMovement === "down") {
    myRobotMove.moveDown();
  } else if (currentMovement === "left") {
    myRobotMove.moveLeft();
  } else {
    myRobotMove.moveRight();
  }
}
console.log(myRobotMove.xCoordinate);
console.log(myRobotMove.yCoordinate);
