const API_URL = "https://api.github.com/users/akshaymarch7";

async function handlePromise() {
    try {
        const data = await fetch(API_URL);
    
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch (error) {
        console.log(error);
    }
}

handlePromise();