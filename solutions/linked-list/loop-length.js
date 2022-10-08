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




//  JS program to detect loop in the linked list 

// Node class 
class Node{ 
    // Constructor to initialize the node object 
    constructor(data){ 
 		this.data = data; 
 		this.next = null;
    }
}
class LinkedList{
// # Function to initialize head 
     constructor(){ 
         this.head = null;
     }
//  Do not change anything above this line

    detectAndCountLoop(){
//         # YOU ONLY NEED TO COMPLETE THIS FUNCTION.
//         # RETURN 1 IF LOOP IS THERE IN THE LINKED LIST, ELSE RETURN 0

        // fast - a pointer moving twice as fast as the slow pointer
        let fast = this.head;
        let slow = this.head;
        let isCycle = false;
        
        while(slow && fast && fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
            // pointers moving with different speeds can meet only 
            // due to the presence of a loop in the linked list
            if(slow == fast){
                isCycle = true;
                break;
            }
        }

        // returning 0 if loop is not present
        if(!isCycle){
            return 0;
        }

        // calculating length of loop
        let temp = slow;
        let loopLength = 1;
        // observing when the destination node will be same as the source node
        // while traversing the linked list
        while(temp.next != slow){
            temp = temp.next;
            loopLength = loopLength + 1;
        }
        return loopLength;
    }

    printList(){ 
        let temp = this.head; 
        while(temp){ 
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
function ConvertToIntegers(ar){
    for(let i=0;i<ar.length;i++){
        ar[i]=parseInt(ar[i]);
    }
    return ar;
}
//  Do not change anything below this line
    
let n = parseInt(readLine());

// Start with the empty list 
let llist = new LinkedList() ;
let ar = readLine().split(" ");
let temp=ConvertToIntegers(ar);
if(n<1){
    llist.head = null;
}
else if(n<2){
    llist.head = new Node(temp[0]);
}
else{
    llist.head = new Node(temp[0]);
}
var curr = llist.head;

for(let i=1;i<n;i++){
    let t = new Node(temp[i]);
    curr.next = t;
    curr = curr.next;
}
let link = parseInt(readLine());
if(link!=-1){
        let t = llist.head;
         for(let i=0;i<link-1;i++){
            t = t.next;
         }
         curr.next = t;
}
console.log(llist.detectAndCountLoop());