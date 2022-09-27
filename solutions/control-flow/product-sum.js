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
let number = parseInt(readLine());
if(number==0)
{
	console.log(0);
}
else
{
	let sum=0;
	let product =1;
	while(number>0)
	{
		let remainder = number%10;
		sum= sum+remainder;
		product = product*remainder;
		number = parseInt(number/10);
	}
	console.log(product-sum);
}
