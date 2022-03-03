let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}



// -------- Do NOT edit anything above this line ----------

// You should fill this functions using the volume and calculate_price functions defined below this.
// dimensions is a list with 2 values width and height respectively
// brick_count is int representing total bricks
function calculate_total_price_of_bricks(dimensions, brick_count){
    let length = 100;
    let width = dimensions[0];
    let height = dimensions[1];

    if(width === -1){
        width = 60;
    }
    if(height === -1){
        height = 40;
    }

    let totalVolume = brick_count * volume(length, width, height);
    let totalPrice = calculate_price(totalVolume);

    return totalPrice;
}

// Do not change anything below this line
function volume(length=100,width=60,height=40){
  return length*width*height
}

function calculate_price(volume, price=0.00005){
	return Math.round(volume*price)
}
function Convert_to_Number(list){
    for(let each in list){
        list[each]=Number(list[each])
    }
    
}

let brick_count = parseInt(readLine())
dimensions = readLine().split(" ")
Convert_to_Number(dimensions)
total_price = calculate_total_price_of_bricks(dimensions, brick_count)
console.log(total_price)