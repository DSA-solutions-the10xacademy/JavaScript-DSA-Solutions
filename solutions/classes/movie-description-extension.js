let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
const Movie = class {
  constructor(
    length_in_minutes = 120,
    num_characters = 4,
    language = "English"
  ) {
    this.length_in_minutes = length_in_minutes;
    this.num_characters = num_characters;
    this.language = language;
  }
  certify() {
    if (this.num_characters >= 2 && this.length_in_minutes <= 240) {
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
    text = text + this.num_characters + " characters, is ";
    text = text + this.length_in_minutes + " minutes long, and is ";
    text = text + flag + "certified.";
    return text;
  }
};

var language = readLine();
var num_characters = readLine();
var length_in_minutes = readLine();

console.log(new Movie(length_in_minutes, num_characters, language).run());