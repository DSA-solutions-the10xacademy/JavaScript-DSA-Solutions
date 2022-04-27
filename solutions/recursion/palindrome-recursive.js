let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function isPalindrome(str,low,high)
{
	if(low>=high){
		return true
	}
	else{
		if(str[low]==str[high] && isPalindrome(str,low+1,high-1)){
			return true
		}
		else{
			return false
		}
	}
}
let t=parseInt(readLine())
for(let i=0;i<t;i++)
{
	let s=readLine()
	if (isPalindrome(s,0,s.length-1)){
		console.log("True")
	}
	else{
		console.log("False")
	}
}
