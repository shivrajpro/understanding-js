class DLLNode {
    constructor(public val: number, public next?: DLLNode, public prev?: DLLNode) {
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(public head?: DLLNode, public tail?: DLLNode, public length?: number) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        let arr = [];
        let temp = this.head;

        while (temp !== null) {
            arr.push(temp.val);
            temp = temp.next;
        }

        console.log('>> arr', arr);

    }

    push(val: number) {
        let node: DLLNode = new DLLNode(val);

        if (this.head === null) {

            this.head = node;
            this.tail = node;

        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;

        return this;
    }

    pop() {
        if (this.head === null) return null;

        var temp = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {

            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }

        this.length--;

        return temp;
        // console.log('>> pop',list.pop());
        // console.log('>> pop',list.pop());
        // console.log('>> pop',list.pop());
    }

    // remove first
    shift() {
        if (this.head === null) return null;

        var temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.length--;
        return temp;
        // console.log('>> list.shift()',list.shift());
        // console.log('>> list.shift()',list.shift());
        // console.log('>> list.shift()',list.shift());
    }

    // add first
    unshift(val: number) {
        if (this.length === 0) return this.push(val);

        var temp = new DLLNode(val);

        temp.next = this.head;
        this.head = temp;

        this.length++;

        return this;

        // list.unshift(4).unshift(5);
    }

    // get node at index
    get(index: number) {
        if (index < 0 || index >= this.length) return null;

        let mid = Math.floor(this.length / 2);

        if (index <= mid) {
            var temp = this.head;
            let count = 0;

            while (count != index) {
                temp = temp.next;
                count++;
            }

        } else {
            var temp = this.tail;
            let count = this.length - 1;

            while (count != index) {
                temp = this.tail.prev
                count--
            }

        }

        return temp;
        // console.log('>> list.get(-1)', list.get(-1));
        // console.log('>> list.get(0)', list.get(0));
        // console.log('>> list.get(4)', list.get(4));
        // console.log('>> list.get(2)', list.get(2));
    }

    // set new value at given index
    set(index: number, val: number) {
        let temp = this.get(index);

        if (temp !== null) {
            temp.val = val;
            return true;
        }

        return false;
        // console.log('>> list.set(-1,4)', list.set(-1,4));
        // console.log('>> list.set(0,11)', list.set(0,11));
        // console.log('>> list.set(4,12)', list.set(4,12));
        // console.log('>> list.set(2,13)', list.set(2,13));
        // console.log('>> list.set(5,13)', list.set(5,13));

    }

    // insert new node at given index
    insert(index: number, val: number) {

        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let temp = this.get(index);

        if (temp !== null) {
            let newNode = new DLLNode(val);

            newNode.next = temp;
            temp.prev.next = newNode;

            this.length++;

            return true;
        }

        return false;
        // console.log('>> list.insert(-1,4)', list.insert(-1, 4));
        // list.print();
        // console.log('>> list.insert(5,16)', list.insert(5, 16));
        // list.print();
        // console.log('>> list.insert(0,11)', list.insert(0, 11));
        // list.print();
        // console.log('>> list.set(4,12)', list.set(4, 12));
        // console.log('>> list.insert(2,13)', list.insert(2, 13));
    }

    // remove node at index
    remove(index: number): DLLNode {

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let temp = this.get(index);

        if (temp !== null) {

            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
            temp.next = null;
            temp.prev = null;

            this.length--;

            return temp;
        }

        return null;
        // console.log('>> list.remove(0)',list.remove(0));
        // console.log('>> list.remove(1)',list.remove(1));
        // console.log('>> list.remove(4)',list.remove(4));
        // console.log('>> list.remove(5)',list.remove(5));

    }
}

var list: DoublyLinkedList = new DoublyLinkedList();

list.push(1).push(2).push(3).push(4).push(5);
list.print();
// console.log('>> list.remove(0)',list.remove(0));
// console.log('>> list.remove(1)',list.remove(1));
// console.log('>> list.remove(4)',list.remove(4));
// console.log('>> list.remove(5)',list.remove(5));
list.print();


