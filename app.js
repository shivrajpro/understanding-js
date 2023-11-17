// Assume "#" is like a backspace in string. 
// This means that string "a#bc#d" actually is "bd"
// const s = 'a#bc#d'; // bd
// const inputStr = 'abc####d##c#'; // ''
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
// let arr = s.split('');

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === '#') {
//     arr.splice(i - 1, 2);
//     i = 0;
//   }
// }

// console.log('>> answer', arr.join(''));

const arr = [1, 23, 4];
// console.log('findi', arr.findIndex((n) => n === 4));

const users = [
  {
    'id': 101,
    'username': 'shiv'
  },
  {
    'id': 102,
    'username': 'raj'
  },
  {
    'id': 103,
    'username': 'rahul'
  }
];

Array.prototype.myFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return i;
    }
  }
}

const answer = users.myFindIndex(function (el) {
  return el.id === 101;
})

// console.log('>> answer', answer);
// console.log('My findi',arr.myFindIndex((n)=> n===4));

var x = 2;
var y = x;
y = 5;
console.log(x);
console.log(y);