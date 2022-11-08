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


// Node class 
class Node{
    //Constructor to initialize the node object 
    constructor(key){ 
        this.key = key; 
        this.next = null;
    }
}
class LinkedList{
// Function to initialize head 
    constructor(){ 
        this.head = null;
        this.tail = null;
    }
    insert(key){
        if (!this.head){
            this.head = new Node(key);
            this.tail = this.head;
        }
        else{
            this.tail.next = new Node(key);
            this.tail = this.tail.next;
        }
    }

// ------------ DO NOT MANE ANY CHANGE ABOVE THIS LINE ---------
    search(key){
        // WRITE YOUR IMPLEMENTATION OF SEARCH HERE
        let currentNode = this.head;

        while(currentNode){
            // checking if key of current node is the queried key
            if(currentNode.key == key){
                return "True";
            }
            // traversing the linked list
            currentNode = currentNode.next;
        }

        // returning false when the queried key is not present in the linked list
        return "False";
    }
}        

function ConvertToIntegers(ar){
    for(let i=0;i<ar.length;i++){
        ar[i]=parseInt(ar[i]);
    }
    return ar;
}
// ----------- DO NOT MAKE ANY CHANGES BELOW THIS LINE ---------
// reading from input and making linked list
let numTests = parseInt(readLine());

for(let test=0;test<numTests;test++){
    let ll =  new LinkedList();
    let key = parseInt(readLine());
    let ar= readLine().split(" ");
    let elements = ConvertToIntegers(ar);
    for(e of elements){
        ll.insert(e);
    }
    console.log(ll.search(key));
}