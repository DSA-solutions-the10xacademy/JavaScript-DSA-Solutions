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



class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
 
class LinkedList{
    constructor(){
        this.head = null;
        this.lastNode = null;
    }
    append(data){
        if (this.lastNode === null){
            this.head = new Node(data)
            this.lastNode = this.head
        }
        else{
            this.lastNode.next = new Node(data)
            this.lastNode = this.lastNode.next
        }
}
}
function lengthLlist(llist){
    let length = 0;
    let current = llist.head;
    while(current){
        current = current.next;
        length = length + 1;
    }
    return length;
}
 
function returnNFromLast(llist, n){
   //Implement this
   let currentNode = llist.head;
   // calling lenghthLlist function to get the length of the linked list
   let length = lengthLlist(llist);
   let currentPosition = 1;
   
   while(currentNode){
    // nth node from the end wlil be (length - n + 1)th node from the beginning
    if(currentPosition == length - n + 1){
        return currentNode.data;
    }
    // traversing the linked list
    currentNode = currentNode.next;
    // updating the current position
    currentPosition = currentPosition + 1;
    }
}
 

function ConvertToIntegers(ar){
    for(let i=0;i<ar.length;i++){
        ar[i]=parseInt(ar[i]);
    }
    return ar;
}

let input= readLine().split(" ");
let N= parseInt(input[0]);
let n =parseInt(input[1]); 
let aLlist = new LinkedList()

let ar = readLine().split(" ")
let l = ConvertToIntegers(ar)
for(i of l){
    aLlist.append(i) 
}

value = returnNFromLast(aLlist, n)
 
console.log(value);