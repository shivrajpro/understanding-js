function myLog(p1, p2 = "") {
    console.log(">>", p1, p2);
}

// A Promise is a JavaScript object that links producing code and consuming code
// a promise
let promise = new Promise(function (resolve, reject) {
    // console.log('promise first line');
    setTimeout(function () {
        // resolve('Promise resolved');
        reject('Promise rejected');
    }, 6000);
    // console.log('promise last line');
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    console.log('async started');
    let result = await promise;

    console.log('result from async', result);
    console.log('async ends');
}

// without async
function noAsyncFunc() {

    let result = "initial value";

    promise.then((value) => {
        myLog('in no async success', value);
        result = value;
    }, (error) => {
        myLog('in no async failed', error);
        result = error;
    });

    console.log('after then in NO async', result);
}

// calling the async function
// noAsyncFunc();
// asyncFunc();

// -----------------X--------------------------X--------------------------X--------------------
// sessionStorage.setItem('data', 'session 5500');
// localStorage.setItem('data', 'local 5500');
let p1 = new Promise((resolve, reject) => {
    resolve("p1");
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3");
    }, 100);
})

let p2 = new Promise((resolve, reject) => {
    resolve("p2");
})

let p4 = new Promise((resolve, reject) => {
    reject("p4");
})

// Promise.all([p1, p3, p2, p4]).then((values) => {
//     console.log('>> values', values);
// }).catch((err)=>{
//     console.error('>> err', err);
// })

Promise.allSettled([p1, p3, p2, p4]).then((values) => {
    // console.log('>> values', values);
}).catch((err)=>{
    // console.error('>> err', err);
})

async function asyncFn2() {
    console.log('first line');

    let result =  await promise;

    console.log('after await');
    
    return result;
}

asyncFn2().then((d)=>{
    console.log('>> in then',d);
}).catch((e)=>{
    console.log('>> in catch',e);
}).finally(()=>{
    console.log('>> finally');
})