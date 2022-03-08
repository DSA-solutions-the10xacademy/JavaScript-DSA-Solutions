let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
const BankAccount = class {
  balance = 0;
  // Optional Constructor
  constructor() {
    this.balance = 0;
  }
  credit(currtransact) {
    this.balance += currtransact;
  }
  debit(currtransact) {
    this.balance += currtransact;
  }
};

var Num = parseInt(readLine());
const myAccount = new BankAccount();
for (let i = 0; i < Num; i++) {
  var currtransact = parseInt(readLine());
  if (currtransact < 0) {
    myAccount.debit(currtransact);
  } else {
    myAccount.credit(currtransact);
  }
}
console.log(myAccount.balance);