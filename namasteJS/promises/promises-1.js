const cart = ["apple", "banana"];

// callback hell
/*
api.createOrder(cart, (orderId)=>{
    api.proceedPayment(orderId, ()=>{
        api.showOrderSummary()
    })
});
*/

const GITHUB_API = "https://api.github.com/users";
const users = fetch(GITHUB_API);
console.log(users);