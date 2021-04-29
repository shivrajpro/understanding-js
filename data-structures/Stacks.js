var StackNode = /** @class */ (function () {
    function StackNode(val, next) {
        this.val = val;
        this.next = next;
        this.val = val;
        this.next = null;
    }
    return StackNode;
}());
var Stack = /** @class */ (function () {
    function Stack(first, last, size) {
        this.first = first;
        this.last = last;
        this.size = size;
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    Stack.prototype.print = function () {
        var temp = this.first;
        if (temp === null)
            console.log('>> STACK IS EMPTY!');
        while (temp !== null) {
            console.log('>> val', temp.val);
            temp = temp.next;
        }
    };
    Stack.prototype.push = function (val) {
        var newNode = new StackNode(val);
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
        // console.log('>> stack.push(2)', stack.push(2));
        // console.log('>> stack.push(3)', stack.push(3));
        // console.log('>> stack.push(1)', stack.push(1));
    };
    Stack.prototype.pop = function () {
        if (this.first === null)
            return null;
        var temp = this.first;
        if (this.first === this.last) //only one element
            this.last = null;
        this.first = this.first.next;
        this.size--;
        return temp.val;
        // console.log('>> stack.push(34)', stack.push(34));
        // console.log('>> stack.push(29)', stack.push(29));
        // console.log('>> stack.push(51)', stack.push(51));
        // stack.print();
        // console.log('>> stack.pop()', stack.pop());
        // stack.print();
        // console.log('>> stack.pop()', stack.pop());
        // console.log('>> stack.pop()', stack.pop());
        // console.log('>> stack.pop()', stack.pop());
        // console.log('>> stack.pop()', stack.pop());
    };
    return Stack;
}());
var stack = new Stack();
console.log('>> stack.push(34)', stack.push(34));
console.log('>> stack.push(29)', stack.push(29));
console.log('>> stack.push(51)', stack.push(51));
stack.print();
console.log('>> stack.pop()', stack.pop());
stack.print();
console.log('>> stack.pop()', stack.pop());
console.log('>> stack.pop()', stack.pop());
console.log('>> stack.pop()', stack.pop());
console.log('>> stack.pop()', stack.pop());
stack.print();
