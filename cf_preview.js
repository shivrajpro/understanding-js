function toDataURL(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onload = function () {
        var fileReader = new FileReader();
        fileReader.onloadend = function () {
            callback(fileReader.result);
        };
        fileReader.readAsDataURL(httpRequest.response);
    };
    httpRequest.open("GET", "https://api.allorigins.win/raw?url=" +url);
    // httpRequest.setRequestHeader("Content-Type","application/json");
    // httpRequest.setRequestHeader("X-Requested-With","XMLHttpRequest");
    // httpRequest.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    // httpRequest.setRequestHeader("Accept","application/json");
    // httpRequest.setRequestHeader("Authorization","Bearer E0HS7ys1iJABZ5d4tvt6veyruVtkSBZ2");
    httpRequest.responseType = "blob";
    httpRequest.send();
}

const url = "https://proclinicx-images.s3.ap-southeast-2.amazonaws.com/craigclinic12/1631783133063-body-chart";
toDataURL(url, (response)=>{
    console.log("qq response", response);
})