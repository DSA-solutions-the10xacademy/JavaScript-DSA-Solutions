let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
class InputReader {
  data = readLine();
  constructor(Index) {
    this.Index = Index;
  }
  readStrings() {
    console.log(this.Index + " " + this.data);
  }
  readIntegers() {
    console.log(this.Index + " " + parseInt(this.data));
  }
  readFloats() {
    console.log(this.Index + " " + parseFloat(this.data).toFixed(2));
  }
};

let num = parseInt(readLine());
let typeOfInput = readLine();
for (let i = 0; i < num; i++) {
	let NewInputReader = new InputReader(i)	
	if (typeOfInput === "string") {
		NewInputReader.readStrings();
	} else if (typeOfInput === "integer") {
		NewInputReader.readIntegers();
	} else {
		NewInputReader.readFloats();
	}
}
