let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}



// -------- Do NOT edit anything above this line ----------

// You should fill this functions using the volume and calculatePrice functions defined below this.
// dimensions is a list with 2 values width and height respectively
// brickCount is int representing total bricks
function calculateTotalPriceOfBricks(dimensions, brickCount){
    let length = 100;
    let width = dimensions[0];
    let height = dimensions[1];

    if(width === -1){
        width = 60;
    }
    if(height === -1){
        height = 40;
    }

    let totalVolume = brickCount * volume(length, width, height);
    let totalPrice = calculatePrice(totalVolume);

    return totalPrice;
}


// Do not change anything below this line
function volume(length=100,width=60,height=40){
  return length*width*height;
}

function calculatePrice(volume, price=0.00005){
	return Math.floor(volume*price);
}
function ConvertToNumber(list){
    for(let each in list){
        list[each]=Number(list[each]);
    }
    
}

let brickCount = parseInt(readLine());
dimensions = readLine().split(" ");
ConvertToNumber(dimensions);
totalPrice = calculateTotalPriceOfBricks(dimensions, brickCount);
console.log(totalPrice);