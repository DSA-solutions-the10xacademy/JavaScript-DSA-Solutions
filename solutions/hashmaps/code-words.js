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
function morseCode(Word){
    let pattern =new Map([["a",".-"],["b","-..."],["c","-.-."],["d","-.."],["e","."],["f","..-."],["g","--."],["h","...."],["i",".."],["j",".---"],["k","-.-"],["l",".-.."],["m","--"],["n","-."],["o","---"],["p",".--."],["q","--.-"],["r",".-."],["s","..."],["t","-"],["u","..-"],["v","...-"],["w",".--"],["x","-..-"],["y","-.--"],["z","--.."]]);
    let str="";
       for(let i=0;i<Word.length;i++){
        str+=pattern.get(Word[i]);
       }
        return str;
}
let testCases=parseInt(readLine());
for(let i=0;i<testCases;i++){
    let input=readLine().split(" ");
    let mySet = new Set();
    for(let k=0;k<input.length;k++){
     mySet.add(input[k]);
    }
    let morseCombinations =new Map();
    for(let key of mySet.keys()){
        let morseConversion = morseCode(key);
        if(morseConversion==="") continue;
        if(morseCombinations.has(morseConversion)){
            morseCombinations.set(morseConversion,morseCombinations.get(morseConversion)+1);
        }else{
            morseCombinations.set(morseConversion,1);
        }
    }
    console.log(morseCombinations.size);
}
