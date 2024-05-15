class node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
};

class linkedList {
    constructor() {
        this.head = null;
    };

    append(value) {
        // adds new node at end of list
        if (!this.head) {
            this.head = new node(value);
            return this;
        };
        let tail = this.getTail();
        tail.next = new node(value);
        return tail.next;
    };     

    prepend(value) {
        //adds new node to beginning of the list
        if (this.head === null) {
            this.head = new node(value);
            return this;
        }
        const oldHead = this.head;
        this.head = new node(value, oldHead)
    };

    size() {
        //returns the total number of nodes in the list
        let nodeCount = 0;
        let counter = this.head;

        while (counter !== null) {
            nodeCount++
            counter = counter.next;
        }
        return nodeCount
    };

    getHead() {
        // returns the first node in the list
        if (!this.head) return null;
        return this.head;
    };

    getTail() {
        //returns the last node in the list
        if (!this.head) return null;

        let tail = this.head;

        while (tail.next !== null) {
            tail = tail.next;
        }
        return tail;
    };

    at(index) {
        //returns the module at given index
        if (index < 0 || index >= this.size()) return null;

        let counter = 0;
        let currentNode = this.head;

        while (currentNode !== null && counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode ? currentNode : null;
    };

    pop() {
        //removes the last element from the list - returns new list
        if (!this.head) return null;

        let current = this.head;
        let previous = null;

        while (current.next !== null) {
            previous = current;
            current = current.next
        }

        if (previous === null) {
            this.head = null;
            this.tail = null;
        } else {
            previous.next = null;
            this.tail = previous
        }
        return this;
    };
    

    find(value) {
        // returns true if value is present in Linkedlist, otherwise returns false
        if (!this.head) return null;

        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
                }    else currentNode = currentNode.next
        };
        return false;
    };

    toString() {
        //returns entire linkList in string format "(value) -> (value) ->..."
        if (!this.head) return "null";
        
        let output = "";
        let currentNode = this.head;

        while (currentNode.next !== null) {
            output = `${output} ( ${currentNode.value} ) ->`;
            currentNode = currentNode.next; 
        }
        
        return `${output}` + ` ( ${currentNode.value} )` + " -> null";
    };
        
    insertAt(value, index) {
        //inserts a new node with provided value at given index (shifts old node to index+1)
        if  (index < 0 || index > this.size()) return "invalid index";

        if (index === 0) {
            this.prepend(value);
            return "insertAt prepend condition";
        };

        if (index === this.size()) {
            this.append(value);
            return "insertAt append condition";
        };

        let currentNode = this.head;
        let counter = 0;

        while (currentNode !== null && counter < index-1) {
            currentNode = currentNode.next;
            counter++;
        };

        const newNode = new node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;

        return `insertAt index ${index} complete`
    };


    removeAt(index) {
        //removes the node at given index
        if (index < 0 || index >= this.size()) return null;

        if (index === 0) {
            this.head = this.head.next;
            return "head removed"
        };

        let counter = 0;
        let currentNode = this.head;

        while (currentNode !== null && counter < (index -1)) {
            currentNode = currentNode.next;
            counter++;
        }
        currentNode.next =  currentNode.next.next
        return `node at index ${index} removed`
    };

    };

//tests

const list = new linkedList();
console.log("PREPEND", list.prepend(2));
console.log("APPEND", list.append(8));
console.log("APPEND", list.append(4));
console.log("APPEND", list.append(16));
console.log("APPEND", list.append(32));
console.log("APPEND", list.append(41));
console.log("APPEND", list.append(50));
console.log("SIZE", list.size());
console.log("linkedList", list);
console.log("HEAD", list.getHead());
console.log("AT", list.at(3));
console.log("POP", list.pop());
console.log("SIZE", list.size());
console.log("FIND", list.find(3));
console.log("FIND", list.find(16));
console.log(list.toString());
console.log("REMOVE", list.removeAt(1));
console.log(list.toString());
console.log(list.insertAt(666, 3));
console.log(list.toString());
