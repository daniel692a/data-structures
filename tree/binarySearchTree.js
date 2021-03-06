/*        10
    4            20
2       8    17      170 */

class Node {
    constructor(value) {
        this.left = null;
        this.value = value;
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if (value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    search(value) {
        let currentNode = this.root;
        while(true) {
            if(!currentNode) {
                return `Fatality`;
            }else if(value === currentNode.value) {
                return currentNode;
            } else {
                if(value < currentNode.value) {
                    currentNode = currentNode.left;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
    recursiveSearch(value, tree = this.root){
        if(tree.value === null) {
            return 'Fatality';
        } else if(value > tree.value) {
            return this.search(value, tree.right);
        } else if(value < tree.value) {
            return this.search(value, tree.left);
        } else {
            return tree;
        }
    }
}

const binarySearchTree = new Tree();