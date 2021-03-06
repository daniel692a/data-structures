class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    peek() {
        return this.first;
    }
    dequeue() {
        if(this.length === 0) {
            return `Empty queue`;
        } else if(this.length === 1) {
            this.last = null;
            this.first = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return this;
    }
}

const myQueue = new Queue();