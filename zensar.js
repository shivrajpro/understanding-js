// Write a Program to find the first second and 
// fourth multiple of 7 which when divided by 2,3,4,5,6 gives the remainder 1.
// console.log('hello');

const results = [];

for (let i = 1;; i++) {
	// const element = array[i];
	const multiple = 7*i;

	if(isMultiple(multiple))
		results.push(multiple);
	if(results.length === 4)
		break;
	
}

// console.log('result',results);

const [first,second, third, fourth] = results;

console.log(first,second,fourth);

function isMultiple(n) {
	return (n%2 === 1 && n%3===1 && n%4===1 && n%5===1 && n%6===1);
}