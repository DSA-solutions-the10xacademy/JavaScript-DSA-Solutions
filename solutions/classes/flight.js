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
class Flight {
	constructor(upTime,downTime){
		this.upTime=upTime;
		this.downTime=downTime;
	}
	calculateFlight(){
		//write your code here
		let upTimeArr = this.upTime.split(':');
		let downTimeArr = this.downTime.split(':');
		let upTimeHrs = parseInt(upTimeArr[0]);
		let upTimeMins = parseInt(upTimeArr[1]);
		let downTimeHrs = parseInt(downTimeArr[0]);
		let downTimeMins = parseInt(downTimeArr[1]);
		return (downTimeHrs - upTimeHrs) * 60 + downTimeMins - upTimeMins;
		
	}
}

// -------- Do NOT edit anything above this line ----------
let upTime=readLine();
let downTime=readLine();
let NewFlight = new Flight(upTime,downTime)
console.log(NewFlight.calculateFlight());
