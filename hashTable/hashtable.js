class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    //Hash Function
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value = 2021) {
        const address = this.hashMethod(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key){
                    return currentBucket[i];
                }
            }
        }
        return `No existe`;
    }
    remove(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key){
                    const item = currentBucket[i];
                    currentBucket.splice(i, 1);
                    return item;
                }
            }
        }
        return `No existe`;
    }
    getAllKeys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]){
                for (let j = 0; j < this.data[i].length; j++) {
                    keys.push(this.data[i][j][0]);
                }
            }
        }
        return keys;
    }
}
const myHashTable = new HashTable(50);
myHashTable.set('Diego', 1990);
myHashTable.set('Daniel', 2002);
myHashTable.set('Sandra', 1999);
myHashTable.set('Mariana', 2003);
myHashTable.get('Daniel');
myHashTable.get('Dan');
myHashTable.remove('Sandra');
myHashTable.set('Dominic');
myHashTable.getAllKeys();