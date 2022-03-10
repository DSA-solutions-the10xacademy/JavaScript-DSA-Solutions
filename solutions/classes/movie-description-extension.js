let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
class Movie{
  constructor(
    lengthInminutes = 120,
    numCharacters = 4,
    language = "English"
  ) {
    this.lengthInminutes = lengthInminutes;
    this.numCharacters = numCharacters;
    this.language = language;
  }
  certify() {
    if (this.numCharacters >= 2 && this.lengthInminutes <= 240) {
      return true;
    } else {
      return false;
    }
  }
  run() {
    var flag = "not ";
    if (this.certify() === true) {
      flag = "";
    }
    let text = "This is a ";
    text = text + this.language + " movie with ";
    text = text + this.numCharacters + " characters, is ";
    text = text + this.lengthInminutes + " minutes long, and is ";
    text = text + flag + "certified.";
    return text;
  }
};

var language = readLine();
var numCharacters = readLine();
var lengthInminutes = readLine();

console.log(new Movie(lengthInminutes, numCharacters, language).run());
