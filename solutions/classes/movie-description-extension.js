let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
class Movie {
  constructor() {
    this.lengthInMinutes = lengthInMinutes;
    this.numCharacters = numCharacters;
    this.language = language;
  }
  certify() {
    if (this.numCharacters >= 2 && this.lengthInMinutes <= 240) {
      return true;
    } else {
      return false;
    }
  }
  run() {
    let flag = "not ";
    if (this.certify() === true) {
      flag = "";
    }
    let text = "This is a ";
    text = text + this.language + " movie with ";
    text = text + this.numCharacters + " characters, is ";
    text = text + this.lengthInMinutes + " minutes long, and is ";
    text = text + flag + "certified.";
    return text;
  }
};

let language = readLine();
let numCharacters = parseInt(readLine());
let lengthInMinutes = parseInt(readLine());

let movie =  new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());
