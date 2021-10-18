const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJBRE1JTixQUkFDVElUSU9ORVIiLCJleHAiOjE2MzA0Nzk0Mzd9.7HVZ45yaEpUgY40HcUgQeS5-uyV0nqMWncS8aquc3avcQ7HT_rzKYvYiw0AgVLcUK84YP2ztTy6SkCJHMq26Eg";
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

const parsedVal = parseJwt(token);
console.log('>> parsedVal',parsedVal);
setTimeout(() => {
    console.log('>> after 10 seconds parsedVal',parsedVal);
}, 10*1000);