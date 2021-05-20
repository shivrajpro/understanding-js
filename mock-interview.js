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

// const clone = Object.assign({}, obj1);// won't work
const clone = JSON.parse(JSON.stringify(obj1));
// clone.a.b.c = 2;
// clone.a = "clone.a";
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

    let first = 0, second = 0;

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
// ==================================================================================

// question: whats the output?
// obj2.getX(); // will log undefined since x is property of obj2 and inner is a prop of getX
// given

const obj2 = {
    x: 1,
    getX() {
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
// obj2.getX();
let ary = [1, 2, 5, 7];

let sum = ary.reduce((acc, el) => acc + el, 10);

// console.log('sum=',sum);
// ==================================================================================
// question : write a function to return the sum
// add(1,2);
// add(1)(2);

function add(n1, n2) {
    if (n1 && n2) {
        return n1 + n2;
    } else {
        return function (n3) {
            return n1 + n3;
        }
    }
}

// console.log(add(1,2));
// console.log(add(1)(2));

// =======================================================================================

// question: Given an unsorted array that contains 1-100. Find the missing number
let arr1 = [1, 7, 3, 6, 4, 2, 9, 10, 8];

sum = arr1.reduce((acc, el) => acc + el);
// console.log("missing number=", 55-sum);

// ==========================================================================================

// question: write a function which will allow me to pay the money with min. number of coins from til

const til = {
    penny: 12,
    nickel: 10,
    dime: 2,
    quarter: 12,
    dollar: 30
};

// input: 20.47

let str = "i love javaScript";
// console.log(str.split("").reverse().join(""));
// ==========================================================================================

// question: print name without using regular function
const profile = {
    username: 'techsith',
    getName: () => {
        console.log('name', this.username);
    }
}

// answer : INVALID QUESTION
// profile.getName();
// console.log(profile.username);

// ==========================================================================================
// question: print the count of maximum number. (here 2 as 4 is repeated twice)
let arr = [1, 2, 2, 4, 2, 4];

arr.sort((a, b) => b - a);

// console.log(arr);
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
        // console.log("count=",i+1);    
        break;
    }
}

// ==========================================================================================
// find the output
arr1 = [5, 120, 15, 21];
for (let i = 0; i < arr1.length; i++) {
    setTimeout(() => {
        // console.log(`Index:${i}, element:${arr1[i]}`);
    }, arr1[i]);
}
// my answer: [0,5], [2,15], [3, 21], [1, 120]
// tip: in sorted order

// ==========================================================================================
// question: convert it to 24 hr format. (here 15:50PM)
// substr params: (startIndex, number_of_chars)
// substring params: (startIndex, endIndex)

let time = "12:50PM";
// console.log("substring", time.substring(2,5));
// console.log("substr", time.substr(2,5));

let hr = Number(time.substr(0, 2));
if (hr === 12 && time.substr(time.length - 2) === "AM")
    hr = "00";
if (hr !== 12 && time.substr(time.length - 2) === "PM")
    hr += 12;
let formattedTime = hr + time.substring(2, 5);
// console.log("formattedTime", formattedTime);

// ==========================================================================================
// question: converts numbers to different base types
// general: number.toString(target_base), parseInt(source_num, source_base)
// decimal to hex
let decimal = 17;
let hex = decimal.toString(16);
// console.log("hex=",hex);

hex = "4A";
// hex to decimal
// console.log("decimal=",parseInt(hex,16));

// ==========================================================================================
// question: Find the minimum and maximum sum of N-1 elements of the array
// solution:
// 1. Excluding max element will give the min. sum
// 2. Exluding min element with give the max. sum

arr = [1, 2, 3, 4, 5];
let min = Math.min.apply(null, arr);
let max = Math.max.apply(null, arr);

sum = arr.reduce((acc, el) => acc + el, 0);
// console.log('>>',sum);
// console.log('>> (sum-min) Max Sum',sum-min);
// console.log('>> (sum-max) Min Sum',sum-max);


// question: sum of elements in a n*n matrix

const matrix = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
]

sum = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        // console.log('>> matrix[i][j]',matrix[i][j]);
        sum += matrix[i][j];
    }
}


// question: polyfill for reduce
// testcases: 2nd arg is optional, in such case accumulator gets initialized with first value
arr = [1, 2, 3];

sum = arr.reduce((acc, el) => acc + el, 0);
// console.log('>> sum',sum);

Array.prototype.myReduce = function (callback, intialValue) {

    let accumulator = intialValue || undefined;
    
    for (let i = 0; i < this.length; i++){
        if(accumulator)
            accumulator = callback.call(accumulator, accumulator, this[i], this);
        else
            accumulator = this[i];
    }


    return accumulator;
}

sum = arr.myReduce((acc, el) => acc + el, 0);
// sum = arr.myReduce(1, 0);
console.log('>> sum', sum);
const queryString = "cat=meow&duck=quack&dog=woof";
const queryObject = queryString.split("&").myReduce((accum, current) => {
  const splitString = current.split("=")
  accum[splitString[0]] = splitString[1];
  return accum;
}, {})
console.log(queryObject);

// =============X===========================X==========================X========================

// question: write your own promise
function myPromise(resolve, reject) {
    var data = 4;

    this.then = function (callback) {
        callback(data);
    }
}

new myPromise().then((data)=>{
    // console.log('>> resolved',data);
});

// question: this is a math puzzle
// f(1)(2)(3) //9
// f(2)(2)(1) //4
// f(2,2,1) //4
// f() //0

// answer: add first two args and multiply it with 3rd

function f(a,b,c) {
    // console.log(a,b,c);
    if(a && b && c){
        return (a+b)*c;
    }else if(a){
        return function (v1) {
            return function name(v2) {
                return (a+v1)*v2;
            }
        }
    }

    return 0;
}

// var answer = f(2,2,1) //4 
answer = f(1)(2)(3) //9
// console.log('>> answer',answer);
