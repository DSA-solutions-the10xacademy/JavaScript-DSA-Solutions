let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
const Inputreader = class {
  Data = readLine();
  constructor(Index) {
    this.Index = Index;
  }
  read_strings() {
    console.log(this.Index + " " + this.Data);
  }
  read_integers() {
    console.log(this.Index + " " + parseInt(this.Data));
  }
  read_floats() {
    console.log(this.Index + " " + parseFloat(this.Data).toFixed(2));
  }
};

var Num = parseInt(readLine());
var typeofinput = readLine();
for (let i = 0; i < Num; i++) {
  if (typeofinput === "string") {
    new Inputreader(i).read_strings();
  } else if (typeofinput === "integer") {
    new Inputreader(i).read_integers();
  } else {
    new Inputreader(i).read_floats();
  }
}