// CREATIONAL PATTERN
// 1. Factory Pattern
const SoftwareEngineer = {
    "DEV":101,
    "QA":102
}

function Developer(name) {
    this.name = name;
    this.type = "DEV";
}

function Tester(name) {
    this.name = name;
    this.type = "QA";
}

function EmployeeFactory() {
    this.create = function (name, type) {

        switch (type) {
            case 101:
                return new Developer(name);
            case 102:
                return new Tester(name);
            default:
                return null;
        }
    }
}

function say() {
    console.log(`Hi I'm ${this.name}. I'm a ${this.type}`);
}

const empFactory = new EmployeeFactory();
const employees = [];

employees.push(empFactory.create("John", SoftwareEngineer.DEV));
employees.push(empFactory.create("Dave", SoftwareEngineer.QA));
employees.push(empFactory.create("James", SoftwareEngineer.DEV));
employees.push(empFactory.create("Ray", SoftwareEngineer.QA));

employees.forEach((emp)=>{
    say.call(emp);
})