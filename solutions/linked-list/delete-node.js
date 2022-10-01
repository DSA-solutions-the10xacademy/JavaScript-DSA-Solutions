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


// javascript program to detect loop in the linked list 

// Node class 
class Node{ 

	// Constructor to initialize the node object 
	constructor(data){ 
		this.data = data; 
		this.next = null;
  }
}
class LinkedList{
  // Function to initialize head 
    constructor(){ 
        this.head = null;
    }
// Do not change anything above this line
    deleteNode(position){ 
        // YOU ONLY NEED TO COMPLETE THIS FUNCTION.
        
        // case for invalid position
        if(position < 0){
            return;
        }

        // when head of the linked list has to be deleted
        if(position == 0){
            this.head = this.head.next;
            this.next = null;
            return;
        } 

        // variable referring to the current node of the linked list
        let currNode = this.head; 

        currNode = this.head;
        let currentPosition = 0;

        // variable referring to the previous node of the linked list
        let prevNode = null;

        while(currNode){ 

            // checking whether we have reached the node to be deleted
            if(currentPosition == position){
                // linking the previous node to the next node
                prevNode.next = currNode.next;
                // unlinking the current node from the linked list
                currNode.next = null;
                return;
            }
            prevNode = currNode;
            // moving forward in the linked list
            currNode = currNode.next;
            currentPosition = currentPosition + 1;
        }

    }

  
    //Utility function to print the linked LinkedList 
    printList(){ 
        let temp = this.head; 
        while(temp){ 
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

// Do not change anything below this line
function convertToNumber(list){
  for(let value of list){
    value=parseInt(value);
  }
  return list;
}


  let n = parseInt(readLine());

    // Start with the empty list 
    let llist =new  LinkedList(); 

    temp = readLine().split(" ");
    convertToNumber(temp);
    if(n<1){
        llist.head = null;
    }
    else if(n<2){
        llist.head =new Node(temp[0]);
    }
    else{
        llist.head =new Node(temp[0]);
        let second =new Node(temp[1]);
        llist.head.next = second;
        
    }
    let curr = llist.head.next;

    for(let i=2;i<n;i++){
        let t =new Node(temp[i]);
        curr.next = t;
        curr = curr.next;
    }
    let pos = parseInt(readLine());
    llist.deleteNode(pos);
    llist.printList();