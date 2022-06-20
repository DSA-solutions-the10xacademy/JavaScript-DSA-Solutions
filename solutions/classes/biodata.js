let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
// Do not Edit above this Line
// Code here

class Student {
  #studentName;
  #rollNumber;
  #dateOfBirth;
  constructor(studentName, rollNumber, dateOfBirth) {
    this.#studentName = studentName;
    this.#rollNumber = rollNumber;
    this.#dateOfBirth = dateOfBirth;
  }
  getStudentName() {
    return this.#studentName;
  }
  getRollNumber() {
    return this.#rollNumber
  }
  getDateOfBirth() {
    return this.#dateOfBirth;
  }
}

// Do not edit below this Line
let studentName = readLine();
let rollNumber = readLine();
let dateOfBirth = readLine();

const student = new Student(studentName, rollNumber, dateOfBirth);

// Output DOB of student
console.log(student.getDateOfBirth());
// Output Name of student
console.log(student.getStudentName());
// Output Roll Number of student
console.log(student.getRollNumber());
