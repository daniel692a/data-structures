1 --> 2 --> 3 --> 4 --> 5 --> 6 --> null

let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: {
                        value: 5,
                        next: {
                            value: 6,
                            next: null
                        }
                    }
                }
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const node = new Node(value);
        this.length++;
        this.tail.next = node;
        this.tail = node;
        return this;
    }
    prepend(value){
        const node = new Node(value);
        this.length++;
        node.next = this.head;
        this.head = node;
        return this.head;
    }
    insert(value, index){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.head;
    }
    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        const firstPointer = this.getTheIndex(index - 1);
        const nextPointer = this.getTheIndex(index + 1);
        firstPointer.next = nextPointer;
        return this.head;
    }
}

let numbers = new MySinglyLinkedList(1);
numbers.append(2);
numbers.append(5);
numbers.append(4);
numbers.append(5);
numbers.remove(2);
numbers.insert(3, 2);