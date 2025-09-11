// const arr = [1, 2, 3];
// const obj = { x: 1, y: 2, z: 3 };

// console.log([...arr, ...obj]);
function foo(a, b) {
    console.log(arguments, a, b);
}

// foo(3, 1);

let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b], a[c], a);

let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);

const obj = {
    a: "foo",
    b: function () {
        console.log(this.a);
    },
};

const d = obj.b;

obj.b();
d();    