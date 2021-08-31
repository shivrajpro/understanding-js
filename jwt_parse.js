const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJBRE1JTixQUkFDVElUSU9ORVIiLCJleHAiOjE2MzAzODg2NDF9.xRYZxZpZRmA3jek_1Qs-bXNH181zf2q715M6AFJW4rqdvbMIOkAcemQ-WmSR3ogaGCEwxlx7bbA4rqQKlQeGwQ";
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