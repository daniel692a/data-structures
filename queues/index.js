class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.bottom = null;
        this.top = null;
        this.length = 0;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            this.top.next = newNode;
            this.top = newNode;
        }
        this.length++;
        return this;
    }
    peek() {
        return this.bottom;
    }
    dequeue() {
        if(this.length === 0) {
            return `Empty queue`;
        } else if(this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.bottom = this.bottom.next;
        }
        this.length--;
        return this;
    }
}

const myQueue = new Queue();