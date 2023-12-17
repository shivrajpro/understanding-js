const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // resolve("P1 Success");
        reject("P1 Fail");
    }, 3000);
})
const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // resolve("P2 Success");
        reject("P2 Fail");
    }, 5000);
})
const p3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // resolve("P3 Success");
        reject("P3 Fail");
    }, 2000);
})


Promise.any([p1, p2, p3])
    .then(res => {
        console.log('res', res);
    })
    .catch((e)=>{
        // console.error(e);
        console.error(e.errors);
    })

/*
Promise.race([p1, p2, p3])
    .then(res => {
        console.log('res', res);
    })
    .catch((err)=>{
        console.error(err);
    })

Promise.allSettled([p1, p2, p3])
    .then(res => {
        console.log('res', res);
    })
    .catch((err)=>{
        console.error(err);
    })

Promise.all([p1, p2, p3])
    .then(res => {
        console.log('res', res);
    })
    .catch((err)=>{
        console.error(err);
    })
*/