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
let numberOfImagePixels = parseInt(readLine());
let imagePixelArray = [];
for(let index = 0 ; index < numberOfImagePixels ; index++){
	let pixel = parseInt(readLine());
	imagePixelArray.push(pixel);
}
let numberOfIconPixels = parseInt(readLine());
let iconPixelArray = [];
for(let index = 0 ; index < numberOfIconPixels ; index++){
	let pixel = parseInt(readLine());
	iconPixelArray.push(pixel)
}
let imagePixelPointer = 0;
let iconPixelPointer = 0;
let numberOfIcons = 0;
while(imagePixelPointer < numberOfImagePixels && iconPixelPointer < numberOfIconPixels){
	if(imagePixelArray[imagePixelPointer] === iconPixelArray[iconPixelPointer]){
		imagePixelPointer = imagePixelPointer + 1;
		iconPixelPointer = iconPixelPointer + 1;
		if(iconPixelPointer === numberOfIconPixels){
			numberOfIcons = numberOfIcons + 1;
			iconPixelPointer = 0;
		}
	}else{
		imagePixelPointer = imagePixelPointer - iconPixelPointer + 1;
		iconPixelPointer = 0;
	}
}
console.log(numberOfIcons);