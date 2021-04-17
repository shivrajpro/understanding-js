// "use strict";
//DEBOUNCING
// place order
// call a function only once after 2 seconds of last click
const myLog = function (...params) {
    console.log(">>",...params);
}
const debounce = function (callback, delay) {
    let timeOutId;


    return function (...args) {
        if (timeOutId)
            clearTimeout(timeOutId);

        timeOutId = setTimeout(() => {
            callback();
        }, delay);
    }
}

document.getElementById("deb").addEventListener("click", debounce(e => {
    console.log("make an API call");
}, 2000))


//THROTTLING
//search bar
//call a function after every 3 seconds of interval as many times the event occurs
const throttle = function (callback, delay) {
    let last = 0;

    return function () {
        let now = new Date().getTime();

        if ((now - last) < delay) {
            return;
        }

        last = now;

        return callback();
    }
}

document.getElementById("thrott").addEventListener("click", throttle(e => {
    console.log("do some operation");
}, 3000))

//Currying
// it is a technique of evaluating a function with multiple arguments, 
// into sequence of functions with single argument.
const sum = function (a) {
    return function (b) {
        if (b)
            return sum(a + b);
        return a;
    }
}

// const add = a => b => return b ? add(a+b) : a;
let add = a => b => b ? add(a + b) : a;
// console.log('sum', add(1)(2)(3)(4)(5)());

// let multiply = function (x,y) {
//     myLog(x*y);
// }

//HOISTING
// getName();
// console.log(x);

// var x=7;

function getName() {
    console.log('namaste js');
}


//call, apply and bind
let name1 = {
    firstname:"shivraj",
    lastname:"hulbatte"
}

let name2 = {
    firstname:"rahul",
    lastname:"dravid"
}

let printFullName = function () {
    myLog(this.firstname+" "+this.lastname);
}

let printUserData = function (hometown, state) {
    myLog(this.firstname+" "+this.lastname+" from "+hometown+", "+state);
}
/*
// This method invokes a method (function) by specifying the owner object.
// allows an object to use the method (function) of another object.
// accepts arguments
printFullName.call(name1);
printFullName.call(name2);

//calls our defined function on data passed

printUserData.call(name1, "Pune", "MH");
printUserData.call(name2, "Bangalore", "KA");

// call() method takes arguments separately whereas, apply() method takes arguments as an array

printUserData.apply(name1, ["Pune", "MH"]);
printUserData.apply(name2, ["Bangalore", "KA"]);


//returns a copy of function
// where the value of “this” skeyword will be bound to the owner object, 
// which is provided as a parameter
let logMyData = printUserData.bind(name1, "Pune", "MH");
let logOthersData = printUserData.bind(name2, "Bangalore", "KA");
// myLog(logMyData);
logMyData();
logOthersData();
*/


//polyfill for bind
// https://youtu.be/ke_y6z0xRpk
/*
let logUserData = function (city, state, country) {
    myLog(this.firstname+" "+this.lastname+", "+city+", "+state+", "+country);
}

Function.prototype.myBind = function (...args) {
    // this points to the caller function
    let obj = this;
    let params = args.slice(1);
    return function (...args2) {
        // myLog("args2="+args2)
        obj.apply(args[0], [...params, ...args2]);
    }

}


logUserData.myBind(name1, "Pune")("MH","India");
logUserData.myBind(name2, "Bangalore")("KA","India");
*/


// prototype and prototypal inheritance
let animal = {
    eats: true,
    walk(){
        myLog("animal walks");
    }
}

let rabbit = {
    runs: true,
    walk(){
        myLog("rabbit walks");
    },
    __proto__: animal
}

let lion = {
    sleeps:true,
    hunts(){
        myLog("lion hunts");
    }
}

Object.setPrototypeOf(lion, rabbit);
// myLog("animal",animal);
// myLog("animal",rabbit);
// myLog("lion",lion);
// console.dir(Object)

// Event Bubbling(bottom to top. click on child) and Capturing/Trickling

// Event bubbling is the inverse of event capturing. 
// In event bubbling, the event will start from the child element and move up to the parent
/*
document.getElementById('gParent').addEventListener('click', ()=>{
    myLog('GRANDPARENT');
}, false)// useCapture arg

document.getElementById('parent').addEventListener('click', ()=>{
    myLog('PARENT');
}, false)// useCapture arg

document.getElementById('child').addEventListener('click', ()=>{
    myLog('CHILD');
}, false)// useCapture arg

// Event capturing means that when we click on the button, 
// the click event will start from the top and move to the children
document.getElementById('gParent').addEventListener('click', ()=>{
    myLog('GRANDPARENT');
}, true)// useCapture arg

document.getElementById('parent').addEventListener('click', ()=>{
    myLog('PARENT');
}, true)// useCapture arg

document.getElementById('child').addEventListener('click', ()=>{
    myLog('CHILD');
}, true)// useCapture arg
*/

// event delegation
document.querySelector("#categories").addEventListener('click', (e)=>{
    myLog('e',e.target.id);
    window.location.href = "/#"+e.target.id;
})

// behaviour pattern
// var firstName = document.getElementById('firstName');
var firstName = document.querySelector('input');
document.querySelector("#myForm").addEventListener('keyup', (e)=>{
    // myLog('e',e);
    console.log('val=',firstName.value);
    if(e.target.dataset.uppercase != undefined)
        e.target.value = e.target.value.toUpperCase();
    console.log('attr val =',firstName.getAttribute('value')); // prints always the value from html
})
// console.log('outside',firstName.getAttribute('value'));


// The “this” keyword refers to the object that the function is a property of.
// The value of “this” keyword will always depend on the object that is invoking the function.
// myLog('outside',this);
function foo() {
    myLog('in foo', this);
}
// foo();
const person = {
    firstname:"shivraj",
    age:"24",
    phone:"9921463549"
}
let {age, phone, firstname} = person; //order does not matter
// console.log('>> age',age,' firstname',firstname,' phone', phone);
