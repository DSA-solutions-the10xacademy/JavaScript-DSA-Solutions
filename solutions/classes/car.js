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
const Flight = class{
	constructor(upTime,downTime){
		this.upTime=upTime;
		this.downTime=downTime;
	}
	calculateFlight(){
		var upTimeArr=this.upTime.split(':');
		upTimeArr=upTimeArr.map((x)=>parseInt(x));
		var downTimeArr=this.downTime.split(':');
		downTimeArr=downTimeArr.map((x)=>parseInt(x));
		return (downTimeArr[0]-upTimeArr[0])*60 + downTimeArr[1]-upTimeArr[1];
	}
}

upTime=readLine();
downTime=readLine();
console.log(new Flight(upTime,downTime).calculateFlight());