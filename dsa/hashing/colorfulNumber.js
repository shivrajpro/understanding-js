// https://www.scaler.com/academy/mentee-dashboard/class/59861/homework/problems/275?navref=cl_tt_lst_sl

function isColorfulNum(A) {
  const str = A+"".split('');
  const set = new Set();

  for (let i = 0; i < str.length; i++) {
    let product = 1;
    for (let j = i; j < str.length; j++) {
        product = product * +str[j];
        if(set.has(product)) return 0;
        set.add(product);
    }
  }

//   console.log(set);
  return 1;
}

console.log(isColorfulNum(23)); //1
console.log(isColorfulNum(236)); //0
