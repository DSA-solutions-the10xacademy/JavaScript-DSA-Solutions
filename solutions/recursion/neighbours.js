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
function panelFunction(panelSize) {
	let arrangements = [];
	panel(panelSize, 0, 0, 0, "");
	function panel(panelSize, currentSeatNumber, numberOfAdjacentA, numberOfAdjacentB, currentArrangement) {
		if (currentSeatNumber == panelSize) {
			arrangements.push(currentArrangement);
			return;
		}
		if (numberOfAdjacentA != 2) {
			panel(panelSize, currentSeatNumber + 1, numberOfAdjacentA + 1, 0, currentArrangement + 'a');
			if (numberOfAdjacentB != 2)
				panel(panelSize, currentSeatNumber + 1, 0, numberOfAdjacentB + 1, currentArrangement + 'b');

		}
		else {
			panel(panelSize, currentSeatNumber + 1, 0, 1, currentArrangement + 'b');
		}
	}
	arrangements.sort();

	for (let i = 0; i < arrangements.length; i++)
		console.log(arrangements[i]);
}

let panelSize = parseInt(readLine());
panelFunction(panelSize);
