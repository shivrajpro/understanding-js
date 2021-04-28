var DLLNode = /** @class */ (function () {
    function DLLNode(val, next, prev) {
        this.val = val;
        this.next = next;
        this.prev = prev;
        this.next = null;
        this.prev = null;
    }
    return DLLNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList(head, tail, length) {
        this.head = head;
        this.tail = tail;
        this.length = length;
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    DoublyLinkedList.prototype.print = function () {
        var arr = [];
        var temp = this.head;
        while (temp !== null) {
            arr.push(temp.val);
            temp = temp.next;
        }
        console.log('>> arr', arr);
    };
    DoublyLinkedList.prototype.push = function (val) {
        var node = new DLLNode(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.pop = function () {
        if (this.head === null)
            return;
        var temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return temp;
        // console.log('>> pop',list.pop());
        // console.log('>> pop',list.pop());
        // console.log('>> pop',list.pop());
    };
    // remove first
    DoublyLinkedList.prototype.shift = function () {
    };
    return DoublyLinkedList;
}());
var list = new DoublyLinkedList();
list.push(1).push(2).push(3);
// console.log('>> list',list);
list.print();
list.print();
