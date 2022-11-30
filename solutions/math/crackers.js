let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// 7 Crackers and 3 Users
// out of 7, 6 crackers were equally distributed to 3 users each get 2 crackers
// remaing one to be ditsributed to 1 user out of three
// now one user has 3 crackers and remaing two users has 2 crackers
// minimum possible (absolute) difference between the largest number of crackers
//received by a user and the smallest number received by a user is 3-2 is 1
// so, this means if crackers are equally distributed to all users then obsolute differnce is 0
// otherwise user get one more extra cracker than user who got minimum crackers

let nums = readLine().split(" ");
let N = parseInt(nums[0]);
let K = parseInt(nums[1]);
if (N % K === 0) {
  console.log(0);
} else {
  console.log(1);
}
