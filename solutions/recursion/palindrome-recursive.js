
function isPalindrome(str,low,high)
{
	if(low>=high){
		return true
	}
	else{
		return str[low]==str[high] && isPalindome(str,low+1,high-1)
	}
}
let t=1
for(let i=0;i<t;i++)
{
	s="eye"
	if (isPalindrome(s,0,s.length-1)){
		console.log("True")
	}
	else{
		console.log("False")
	}
}