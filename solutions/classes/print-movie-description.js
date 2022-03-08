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
  constructor(length_in_minutes, num_characters, language) {
    this.length_in_minutes = length_in_minutes;
    this.num_characters = num_characters;
    this.language = language;
  }
  run() {
    let text = "This is a ";
    text = text + this.language + " movie with ";
    text = text + this.num_characters + " characters and is ";
    text = text + this.length_in_minutes + " minutes long.";
    return text;
  }
};

var language = readLine();
var num_characters = readLine();
var length_in_minutes = readLine();

console.log(new Movie(length_in_minutes, num_characters, language).run());