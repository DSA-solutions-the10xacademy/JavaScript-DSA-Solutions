let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.

class Circle {
  constructor(r = 0) {
    this.r = r;
  }
  getArea() {
    if (this.r <= 0) {
      return 0;
    }
    return Math.ceil(3.14 * this.r * this.r);
  }
  getCircumference() {
    if (this.r <= 0) {
      return 0;
    }
    return Math.ceil(2 * 3.14 * this.r);
  }
};


// -------- Do NOT edit anything above this line ----------

let oneCircle = new Circle(parseInt(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());
