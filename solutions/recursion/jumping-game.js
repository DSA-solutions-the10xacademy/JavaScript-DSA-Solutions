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

    return 1 + Math.min(minimumJumps(currentPosition + panels[currentPosition - 1], panels, numberOfPanels), 
		minimumJumps(currentPosition + 1, panels, numberOfPanels));
}


let numberOfPanels = parseInt(readLine());

let panels = readLine().split(" ");

for(let i = 0; i < numberOfPanels; i++){
    panels[i] = parseInt(panels[i]);
}

console.log(minimumJumps(1, panels, numberOfPanels));