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
// # JS program program to detect loop in the linked list 

// # Node class 
class Node{ 

//Constructor to initialize the node object 
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
// # Do not change anything above this line

    deleteDuplicates(){
//         # YOU ONLY NEED TO COMPLETE THIS FUNCTION.
            let dict = {};

            let currentNode = this.head;
            let prevNode = null;

            while(currentNode){
                // checking if current node value has been encountered previously
                if(currentNode.data in dict){
                    // deleting the current node
                    if(prevNode == null){
                        this.head = this.head.next;
                        currentNode = currentNode.next;
                    } else {
                        let nextNode = currentNode.next;
                        currentNode.next = null;
                        prevNode.next = nextNode;
                        currentNode = nextNode;
                    }
                    // skipping rest of the while loop to avoid extra skipping of nodes
                    continue;
                } else {
                    // hashing the current node value
                    dict[currentNode.data] = 1;
                }
                // updating the previous node
                prevNode = currentNode;
                // traversing ahead in the linked list
                currentNode = currentNode.next;
            }
    }

    printList(){ 
        let temp = this.head; 
        while(temp){ 
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

// Do not change anything below this line

//converting strings to integers
function ConvertToIntegers(ar){
    for(let i=0;i<ar.length;i++){
        ar[i]=parseInt(ar[i])
    }
    return ar
}


let n = parseInt(readLine());
// Start with the empty list 
let llist = new LinkedList(); 
let ar = readLine().split(" ");
let temp = ConvertToIntegers(ar);
// let temp = [int(x) for x in input().split()]
if(n<1){
    llist.head = null;
    }
else if(n<2){
    llist.head = new Node(temp[0]);
}
else{
    llist.head = new Node(temp[0]);
    let second = new Node(temp[1]);
    llist.head.next = second;
}
var curr = llist.head.next;
for(let i=2;i<n;i++){
    let t = new Node(temp[i]);
    curr.next = t;
    curr = curr.next
}
llist.deleteDuplicates();
llist.printList();