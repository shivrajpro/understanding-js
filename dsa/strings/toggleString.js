function getToggledString(A) {
    let arr = A.split('');

    for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        // if(c>='A' && c<='Z') arr[i] = c.toLowerCase();
        // if(c>='a' && c<='z') arr[i] = c.toUpperCase();
        if(c>='A' && c<='Z') arr[i] = String.fromCharCode(A.charCodeAt(i) + 32);
        if(c>='a' && c<='z') arr[i] = String.fromCharCode(A.charCodeAt(i) - 32);
    }

    return arr.join('');
}

console.log(getToggledString('HellO'));