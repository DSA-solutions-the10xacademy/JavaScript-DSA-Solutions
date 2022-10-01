let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// -------- Do NOT edit anything above this line ----------

function getElementAt(qIndex, listHead) {
    
    // initialising initial position as 1 to follow 1-based indexing
    let currentPosition = 1;
    let currentNode = listHead;
    while(currentNode){
        // checking if current position is the query index
        if(currentPosition == qIndex){
            return currentNode.data;
        }
        // traversing the linked list
        currentNode = currentNode.next;
        // incrementing value of current position
        currentPosition = currentPosition + 1;
    }

    return -1;
}

// -------- Do NOT edit anything below this line ----------
let numTests = parseInt(readLine());
for (let i = 0; i < numTests; ++i) {
    let listElements = readLine().split(" ");
    let index = parseInt(readLine());
    let head = null;
    if (listElements.length > 0) {
        head = new Node(parseInt(listElements[0]));
        let currNode = head;
        for (let j = 1; j < listElements.length; ++j) {
            currNode.next = new Node(parseInt(listElements[j]));
            currNode = currNode.next;
        }
    }
    console.log(getElementAt(index, head));
}