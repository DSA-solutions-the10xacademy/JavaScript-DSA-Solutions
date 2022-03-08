let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named as `Rectangle`.
// Method to get area should be named as `rectangleArea`.
// Method to get perimeter should be named as `rectanglePerimeter`.
// You should be taking `length` and `width` as inputs when creating the object for your class.
const Rectangle = class {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  rectangleArea() {
    if (this.length <= 0 || this.width <= 0) {
      return 0;
    }
    return this.length * this.width;
  }
  rectanglePerimeter() {
    if (this.length <= 0 || this.width <= 0) {
      return 0;
    }
    return 2 * (this.length + this.width);
  }
};

newRectangle = new Rectangle(parseInt(readLine()), parseInt(readLine()));
console.log(newRectangle.rectangleArea());
console.log(newRectangle.rectanglePerimeter());