const obj = {
    a: 1,
    b: 2,
    getA() {
        console.log('a=', this.a);
        // return this;
    },
    getB() {
        console.log('b=', this.b);
    }
}
// obj.getA().getB(); should log a and b

// [1,2].print(); should log 1,2
Array.prototype.print = function (e) {
    console.log('this=', this.join());
};
// let arr = [1,2];
// arr.print();
// [1,2].print();


// given
const A = function (x) {
    this.x = x;

    // console.log('in A this=',this);
    this.getX = function () {
        console.log('x=', this.x);
    }

    this.z = "Z";
}

const B = function (x, y) {
    console.log('in B this=', this, 'A.x=', A.x); //A.x will give undefined
    // A.call(this, x); //answer

    this.y = y;
}

// const newB = new B('x', 'y');

// question: below logic should log x and y (use inheritance)
// newB.getX();
// newB.getY();

// given
const obj1 = {
    a: {
        b: {
            c: 1
        }
    }
};

// question: create a clone of obj1 such that obj1.a.b.c should print 1
// const clone = /** your code */
// clone.a.b.c = 2

// const clone = Object.assign({}, obj1);
const clone = JSON.parse(JSON.stringify(obj1));
clone.a.b.c = 2;
// console.log('c from obj1=', obj1.a.b.c);

// given
const a = [1, 2, 5, 7, 9];
//                     f

const b = [2, 5, 7, 12, 100];
//                   s
// create a sorted array as below
// const c = [1,2,2,5,5,7,7,12,100];

// c = [1, 2, 2, 5, 5, 7, 7, 9, ]
// c = [1, 2, 2, 5, 5, 7, 7, 9, 12, 100]

// using MERGE SORT
// if a[f] < b[s]
// c.push(a[f])
// f++
// else if a[f]>=b[s]
// c.push(b[s])
//  s++

function MERGE_SORT(a, b) {
    let c = [];

    let first = 0, second = 0, result = 0;

    while (first < a.length && second < b.length) {
        if (a[first] < b[second]) {
            c.push(a[first]);
            first++;
        } else if (a[first] >= b[second]) {
            c.push(b[second]);
            second++;
        }
    }

    while (first < a.length)
        c.push(a[first++]);

    while (second < b.length)
        c.push(b[second++]);

    // console.log('in MS c=', c);
}
MERGE_SORT(a, b);
// my solution
let c = a.concat(b);
c.sort(function (a, b) { return a - b; }) // return b-a; console.log('a=',a,'b=',b);
// console.log('concat = ', c);

// console.log(a+b); //1,2,5,7,92,5,7,12,100


// given
const obj2 = {
    x:1,
    getX(){
        console.log('first');
        const that = this;
        const inner = function () {
            console.log('from inner this.x=', this.x);
            console.log('from inner that.x=', that.x);
        }
        inner();
        // inner.call(this);
        // inner.bind(this)();
    },
    // getX(){
    //     console.log('second');
    //     const inner =  () => {
    //         console.log('from inner x=', this.x); //will log 1
    //     }
    //     inner();
    // }
}

// whats the output?
obj2.getX(); // will log undefined since x is property of obj2 and inner is a prop of getX