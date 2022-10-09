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


// JS program to delete M nodes after N nodes 
  
// Node class  
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
    // Function to insert a new node at the beginning 
    push(newData){ 
        if (!this.head){
            // console.log("executed1")
            this.head = new Node(newData);
            this.tail = this.head;
        }
        else{
            // console.log("executed2")
            this.tail.next = new Node(newData);
            this.tail = this.tail.next;
        }
    }
    // Utility function to prit the linked LinkedList 
    printList(){ 
        let temp = this.head; 
        while(temp){ 
            console.log (temp.data+ ' '); 
            temp = temp.next
        }
    }
    skipMdeleteN(M, N){
        // Implement This 

        let skip = 0;
        let del = 0;

        let curr = this.head;
        let prev = null;
        let toDisconnect = null;

        while(curr){
            // traversing through nodes to be skipped
            while(curr&&skip<M){
                if(skip == M-1){
                    // storing the node from which new link will originate in every 
                    // sub-part of the list
                    prev = curr;
                }
                curr = curr.next;
                skip = skip + 1;
            }
            skip = 0;
           // traversing through nodes to be deleted
            while(curr&&del<N){
                if(del == N-1){
                    toDisconnect = curr;
                }
                del = del + 1;
                curr = curr.next;
            }
            del = 0;
            
            if(curr&&prev){
                // deleting nodes from the middle and connecting 
                // disjoint ends of the linked list
                prev.next = curr;
                toDisconnect.next = null;
            } else {
                prev.next = null;
            }
            // moving forward in the linked list
            curr = prev.next;
        }
    }
          
}

// Driver program to test above function 
function ConvertToIntegers(ar){
    for(let i=0;i<ar.length;i++){
        ar[i]=parseInt(ar[i]);
    }
    return ar;
}

let n = parseInt(readLine());
let input = readLine().split(" ");
let M = parseInt(input[0]);
let N = parseInt(input[1]);
let llist = new LinkedList(); 
let ar=readLine().split(" ");
l = ConvertToIntegers(ar);
for(i of l){
    llist.push(i);
}
llist.skipMdeleteN(M, N) ; 
llist.printList();