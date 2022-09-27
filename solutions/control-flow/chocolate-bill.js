let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let costOfOneChocolate = parseInt(readLine());
let noOfChocolates = parseInt(readLine());
let costOfOneIceCream = parseInt(readLine());
let noOfIceCreams = parseInt(readLine());
let totalBill = (costOfOneChocolate*noOfChocolates)+(costOfOneIceCream*noOfIceCreams);
console.log(totalBill);