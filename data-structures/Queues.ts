class QNode{
    constructor(public val:number, public next?:QNode){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(public first?:QNode, public last?: QNode, public size?: number){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    print(){
        var arr = [];

        var temp = this.first;

        while(temp!==null){
            arr.push(temp.val);
            temp = temp.next;
        }

        console.log('>> q',arr);
        
    }

    enqueue(val:number){

        var newNode = new QNode(val);

        if(this.first === null){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;

    }

    dequeue(){
        if(this.first === null) return null;

        var temp = this.first;

        if(this.first === this.last)
            this.last = null;
        
        this.first = this.first.next;

        this.size--;

        return temp.val;
    }
}

var q = new Queue();
console.log('>> q.enqueue(52)',q.enqueue(52));
console.log('>> q.enqueue(31)',q.enqueue(31));
console.log('>> q.enqueue(24)',q.enqueue(24));
q.print();
console.log('>> q.dequeue()',q.dequeue());
console.log('>> q.dequeue()',q.dequeue());
q.print();
