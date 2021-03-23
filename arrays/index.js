const numbers = [1, 2, 3];

class MiArray {
    constructor( ) {
        this.length = 0;
        this.data = { };
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.length -1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
    shift() {
        const firstItem = this.data[0];
        this.shiftIndex(0);
        return firstItem;
    }
    unshift(item) {
        const lastItem = this.data[this.length -1];
        const start = this.length -1;
        for(let i = start; i > 0; i--) {
            this.data[i] = this.data[i-1];
        }
        this.data[0] = item;
        this.push(lastItem);
        return this.data;
    }
}

const names = new MiArray();
names.push('Daniel');
names.push('Martin');
console.log(names.push('Diego'));
console.log(names.pop());
console.log(names);