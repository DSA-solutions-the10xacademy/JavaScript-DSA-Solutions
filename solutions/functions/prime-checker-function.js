let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Following function takes integer and should return True if it's prime 
// otherwise  should return False.
function is_prime(input_number){
    // You can start below this
    
    if(input_number <= 1) return "False";
	else if(input_number === 2) return "True";

    for(let i = 2; i <= parseInt(Math.sqrt(input_number)); i++){
        if(input_number % i === 0) return "False";
    }
    
    return "True";
}

//Please don't change anything below this line.
let number=parseInt(readLine())
console.log(is_prime(number))