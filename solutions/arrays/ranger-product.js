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

function convertToNumber(list){
    for(let i = 0; i < list.length; i++){
        list[i] = parseInt(list[i]);
    }

    return list;
}

let numberOfTests = parseInt(readLine());

while(numberOfTests--){
    let listLength = parseInt(readLine());
    let list = readLine().split(" ");
    list = convertToNumber(list);

    let leftProduct = [1];
    let rightProduct = [1];

    for(let i = 0; i < (listLength-1); i++){
        let currLeftProduct = leftProduct[leftProduct.length - 1] * list[i];
        leftProduct.push(currLeftProduct);
    }

    for(let i = (listLength - 1); i > 0; i--){
        let currRightProduct = rightProduct[rightProduct.length - 1] * list[i];
        rightProduct.push(currRightProduct);
    }

    rightProduct.reverse();

    let result = [];
    for(let i = 0; i < listLength; i++){
        result[i] = leftProduct[i] * rightProduct[i];
    }

    console.log(...result);
}
