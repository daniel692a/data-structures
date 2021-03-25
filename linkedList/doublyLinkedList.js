class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.head;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this.head;
    }
    insert(value, index) {
        if(index >= this.length) {
            this.length++
            return this.append(value);
        }
        const newNode =new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.prev = firstPointer;
        newNode.next = holdingPointer;
        holdingPointer.prev = newNode;
        this.length++;
        return this.head;
    }
    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        const firstPointer = this.getTheIndex(index - 1);
        const restNodes = this.getTheIndex(index + 1);
        firstPointer.next = restNodes;
        this.length--;
        return this.head;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(1);