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

            var temp = pre.next;

            pre.next = null;
            this.length--;

            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            // console.log(">> pre", pre);
            return temp;
        }
    }

    // remove first
    shift() {
        if (this.head !== null) {
            var temp = this.head;

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

            return temp;
        }
    }

    // set value at index
    set(index, val) {
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

    // insert node at index
    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        var newNode = new Node(val);

        if (index === 0)
            this.unshift(val);
        else if (index === this.length)
            this.push(val);
        else {

            var temp = this.head;

            while (index-- !== 1) //coz we need to insert node after temp
                temp = temp.next;

            // console.log('>> temp', temp);
            newNode.next = temp.next;
            temp.next = newNode;

            this.length++;
        }

        return true;
        // console.log('>> list.insert(0, 5)', list.insert(0, 5));
        // console.log('>> list.insert(1, 5)', list.insert(1,5));
        // console.log('>> list.insert(2, 5)', list.insert(2,5));
        // console.log('>> list.insert(-1, 5)', list.insert(-1, 5));
        // console.log('>> list.insert(5, 5)', list.insert(5, 5));

    }

    // remove node at index
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0)
            return this.shift();
        else if (index === this.length - 1)
            return this.pop();
        else {
            var foundNode = this.get(index - 1);
            var removed = foundNode.next;
            // console.log('>> foundNode', foundNode);
            foundNode.next = removed.next;
            this.length--;

            return removed;
        }
        // console.log('>> list.remove(1)', list.remove(1));
        // console.log('>> list.remove(3)', list.remove(3));
        // console.log('>> list.remove(0)', list.remove(0));

    }
}

var list = new SinglyLinkedList();
list.push(1).push(2).push(3).push(4);
list.traverse();
list.traverse();
console.log('>> list', list);