let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let number = parseInt(readLine());
if(number==0)
{
	console.log(0);
}
else if(number==1 || number==2)
{
	console.log(1);
}
else
{
	let T0=0;
	let T1=1;
	let T2=1;
	for(let index=3;index<=number;index++)
	{
		let T3=T0+T1+T2;
		T0=T1;
		T1=T2;
		T2=T3;
	}
	console.log(T2);
}
