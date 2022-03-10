let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
class BankAccount {
  balance = 0;
  // Optional Constructor
  constructor() {
    this.balance = 0;
  }
  credit(currentTransaction) {
    this.balance += currentTransaction;
  }
  debit(currentTransaction) {
    this.balance += currentTransaction;
  }
};

let n = parseInt(readLine());
const myAccount = new BankAccount();
for (let index = 0; index < n ; index++) {
  let currentTransaction = parseInt(readLine());
  if (currentTransaction < 0) {
    myAccount.debit(currentTransaction);
  } else {
    myAccount.credit(currentTransaction);
  }
}
console.log(myAccount.balance);
