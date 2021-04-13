const obj = {
    a:1,
    b:2,
    getA(){
        console.log('a=',this.a);
        // return this;
    },
    getB(){
        console.log('b=',this.b);
    }
}
// obj.getA().getB(); should log a and b

// [1,2].print(); should log 1,2
Array.prototype.print = function (e) {
    console.log('this=',this.join());
};
// let arr = [1,2];
// arr.print();
[1,2].print();