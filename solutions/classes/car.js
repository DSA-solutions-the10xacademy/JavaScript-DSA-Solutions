let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define the required class here...
const Car = class {
  constructor(name = "Audi", model = "A4") {
    this.name = name;
    this.model = model;
  }
};

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let flag = parseInt(readLine());
if (flag === 1) {
  var input_string = readLine().split(" ");
  p1 = new Car(input_string[0], input_string[1]);
} else {
  p1 = new Car();
}

console.log(p1.name);
console.log(p1.model);