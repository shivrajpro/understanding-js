const cart = ["shoes", "books"];

// const promise = createOrder(cart);
// console.log('>> promise',promise);

// Consumer
createOrder(cart)
    .then(function (orderId) {
        console.log('response', orderId);
        return orderId;
    })
    .catch((e) => {
        console.log("e", e.message);
    })
    .then(function (orderId) {
        return proceedToPayment("orderId ",orderId);
    })
    .then(function (paymentInfo) {
        console.log("paymentInfo ",paymentInfo);
    })
    .catch(function () {
        console.log("another catch");
    })
    .then((e) => {
        console.log("no matter what happens this will be definitely called");
    })

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");
    });
}
// Producer
function createOrder(cart) {
    // console.log("cart", cart);
    const pr = new Promise(function (resolve, reject) {
        // create order
        // validate cart
        // orderId

        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = "123432";

        if (orderId) {
            setTimeout(() => {
                resolve(orderId)
            }, 2000);
        };
    });

    return pr;
}

function validateCart(cart) {
    return false;
}

