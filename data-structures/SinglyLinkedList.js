class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse() {
        var current = this.head;

        while (current !== null) {
            console.log('>> val', current.val);
            current = current.next;
        }
    }

    // add to end
    push(val) {
        var newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    // add to beginning
    unshift(val) {
        var newNode = new Node(val);

        if (this.head !== null) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = this.head;
        }

        this.length++;

        return this;
    }

    // remove last
    pop() {

        if (this.head) {
            var pre = this.head;

            while (pre.next !== null && pre.next.next != null)
                pre = pre.next;

            var val = pre.next.val;

            pre.next = null;
            this.length--;

            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            // console.log(">> pre", pre);
            return val;
        }
    }

    // remove first
    shift() {
        if (this.head !== null) {
            var temp = this.head.val;

            this.head = this.head.next;
            this.length--;

            if (this.length === 0) {
                this.tail = null;
            }

            return temp;
        }
    }

    // get value at index
    get(index) {
        if (index < 0 || index > this.length) return;

        if (this.head != null) {
            var temp = this.head;
            while (index-- !== 0)
                temp = temp.next;
            // console.log('>> temp',temp);

            return temp.val;
        }
    }
    
    // set value at index
    set(index,val) {
        if (index < 0 || index > this.length) return;

        if (this.head != null) {
            var temp = this.head;
            while (index-- !== 0)
                temp = temp.next;
            // console.log('>> temp',temp);
            temp.val = val;

            return this;
        }
    }

}

var list = new SinglyLinkedList();
// console.log('>> list', list);
list.push(1).push(2).push(3).push(4);
list.traverse();
console.log('>> list.set(1,5)', list.set(1,5));
list.traverse();
// list.traverse();