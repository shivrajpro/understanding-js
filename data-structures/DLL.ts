class DLLNode {
    constructor(public val?: number, public next?: DLLNode, public prev?: DLLNode) {
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

    pop(){
        if(this.head === null) return;
        
        var temp = this.tail;

        if(this.length===1){
            this.head = null;
            this.tail = null;
        }else{
            
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;

        return temp;
        // console.log('>> pop',list.pop());
        // console.log('>> pop',list.pop());
        // console.log('>> pop',list.pop());
    }
    
    // remove first
    shift(){
    }
}

var list: DoublyLinkedList = new DoublyLinkedList();

list.push(1).push(2).push(3);
// console.log('>> list',list);
list.print();
list.print();

