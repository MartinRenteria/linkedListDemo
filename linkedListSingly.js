//node class
class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}


//singly linkedList class
class SinglyLinkedList {
    constructor() {
        this.head 
    }
    setHead(data) {
        //check to see if there is an existing head
        if(!this.head) {
            this.head = new Node(data)
            return this.head
        } else {
            //redefine the head and the references
            let tempHead = this.head
            //set the new head
            this.head = new Node(data)
            //define the new heads next reference to the oldhead
            this.head.next = tempHead
            return this.head
        }
    }
    addNode(data) {
        //we start at the beginning of the LL
       let currentNode = this.head
       //create a condition to check if we are at the end
       while(currentNode.next !== null) {
            currentNode = currentNode.next
       }
       currentNode.next = new Node(data)
       return
    }
    //create a function that console logs every node
    printNodes() {
        //we start at the head
        if(!this.head){
            console.log('No nodes in this linked list')
            return
        } else {
            //define our starting point
            let currentNode = this.head
            while(currentNode !== null){
                //print out the node
                console.log(currentNode)
                //we traverse
                currentNode = currentNode.next
            }
        }
        
    }
}
//////////// Singly LL challenges /////////////

    //create a function that sets the tail(last node)
      class LinkedList{
          constructor(){
            this.head = null
            this.tail = null
            this.length = 0
          }

        //Set the tail
        setTail(data) {
            if(!this.head) {
                this.head = new Node(data);
                this.tail = this.head
            } else {
                let currentNode = this.head
                while(currentNode.next !== null) {
                    currentNode = currentNode.next
                }
                let oldTail = currentNode
                oldTail.next = new Node(data)
                this.tail = oldTail.next
            }
        }  
        // Insert Node first
        insertNode(data) {
            this.head = new Node(data, this.head)
        }
        // shows me current nodes in Linked list 
        showListData() {
            let current = this.head;
    
        while (current) {
            console.log(current.data)
            current = current.next
            }
        }
        // Get Node at index
        getNode(index) {
            let current = this.head;
            let count = 0;

            while(current) {
                if(count == index) {
                    console.log(current.data)
                }
                count++;
                current = current.next
            }
            return null;
        }
    //delete Node at index
    removeNode(index) {
        if(index > 0 && index > this.length) {
            return;
        }

        let current = this.head;
        let previous;
        let count = o;

        // Remove the first index from the List
        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
      }
      }

    const ll = new LinkedList();

    ll.insertNode('Martin');
    ll.insertNode("Amanda");
    ll.insertNode('Raven');
    ll.insertNode('Juan');
    ll.insertNode('Steve');
    ll.insertNode('Noothan');
    ll.insertNode('Ana');


// shows current data in data structure
ll.showListData()

// Get a linked list at index of current head
ll.getNode(6)

//////////// CHALLENGE /////////////    
//Prompt: Write a method that determines if the SSl is circular (hint: think of what happens when you draw a circle) //returns a boolean


//we want to see what the SLL looks like
const sLL = new SinglyLinkedList()


// sLL.setHead('Irene')
// sLL.addNode('Yannick')
// sLL.addNode('Mark')
// sLL.addNode('Erica')
// sLL.addNode('Linda')

// sLL.printNodes()
// console.log(sLL)