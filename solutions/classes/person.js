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
const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let input_string = readLine().split(" ");
var p1 = new Person(input_string[0], input_string[1]);
console.log(p1.name);
console.log(p1.age);