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
  constructor(lengthInMinutes, numCharacters, language) {
    this.lengthInMinutes = lengthInMinutes;
    this.numCharacters = numCharacters;
    this.language = language;
  }
  run() {
    let text = "This is a ";
    text = text + this.language + " movie with ";
    text = text + this.numCharacters + " characters and is ";
    text = text + this.lengthInMinutes + " minutes long.";
    return text;
  }
};

let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();

let movie =  new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());
