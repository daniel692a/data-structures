
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
}

const names = new MiArray();
names.push('Daniel');
console.log(names.push('Diego'));
console.log(names.pop());
console.log(names);