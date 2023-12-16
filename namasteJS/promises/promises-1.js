const cart = ["apple", "banana"];

// callback hell & inversion of control (any function may fail)
/*
pyramid of doom
api.createOrder(cart, (orderId)=>{
    api.proceedPayment(orderId, (paymentInfop)=>{
        api.showOrderSummary(function(paymentInfop){
            api.updateWallet()
        })
    })
});
*/

const GITHUB_API = "https://api.github.com/users";
const users = fetch(GITHUB_API);
console.log(users);

// promise chain
/*
createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo)
    })
    .then(function (paymentInfo) {
        return updateWalletBalance(paymentInfo);
    })

createOrder(cart)
    .then(orderId => proceedToPayment(orderId))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWalletBalance(paymentInfo))
*/