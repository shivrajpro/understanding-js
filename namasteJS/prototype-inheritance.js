let obj1 = {
    name:"abc",
    city:"pune",
    getIntro: function () {
        console.log(`${this.name} from ${this.city}`);
    }
}

let obj2 = {
    name:"def"
}

// Never do this
obj2.__proto__ = obj1; 
// modern JavaScript suggests that we should use 
// Object.getPrototypeOf/Object.setPrototypeOf functions instead that 
// get/set the prototype
console.log('obj2-->',obj2.name);
console.log('obj2-->',obj2.city);
console.log('obj2-->',obj2.getIntro());


const obj = {};
const parent = { foo: 'bar' };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar"


