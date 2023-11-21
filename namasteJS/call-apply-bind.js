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
function printFullName(city, state) {
    console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
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