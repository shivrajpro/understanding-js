const obj1 = {
    firstName:"abc",
    lastName:"def",
    // printFullName: function () {
    //     console.log(`${this.firstName} ${this.lastName}`);
    // }
}
const obj2 = {
    firstName:"ghi",
    lastName:"jkl"
}
function printFullName(city, state, pincode, country) {
    console.log(`${this.firstName} ${this.lastName} from ${city}, ${state} - ${pincode} ${country}`);
}


// obj1.printFullName();
// obj1.printFullName.call(obj2);

printFullName.call(obj1);
printFullName.call(obj1, "Pune", "MH");
printFullName.call(obj2, "BLR", "KA");
printFullName.apply(obj2, ["BLR", "KA"]);


let printLater = printFullName.bind(obj1, "Pune", "MH"); 
//returns a copy of fn to be used later

printLater();

// ===================================================
// Polyfill for bind
console.clear();
Function.prototype.mybind = function (...args) {
    const fn = this, params = args.slice(1); //1st element is obj
    // console.log('this',this);
    // console.log('args',args);
    console.log('params',params);
    return function (...args2) {
        console.log('args2',args2);
        // fn.call(args[0]);
        fn.apply(args[0], [...params, ...args2]);
    }
}

printLater = printFullName.mybind(obj1, "Pune","411036");
printLater("MH", "India");

