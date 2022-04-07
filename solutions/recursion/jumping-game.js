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

function minimumJumps(currentPosition, panels, numberOfPanels){

    if(currentPosition > numberOfPanels){
        return 0;
    }

    let K = panels[currentPosition - 1];
    let jumpKUnits = minimumJumps(currentPosition + K, panels, numberOfPanels);
    let jumpOneUnit = minimumJumps(currentPosition + 1, panels, numberOfPanels);
    
    return 1 + Math.min(jumpKUnits, jumpOneUnit);
}


let numberOfPanels = parseInt(readLine());

let panels = readLine().split(" ");

for(let i = 0; i < numberOfPanels; i++){
    panels[i] = parseInt(panels[i]);
}

console.log(minimumJumps(1, panels, numberOfPanels));