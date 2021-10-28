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

const testUrl = "https://static.thenounproject.com/png/643663-200.png";
const awsUrl = "https://proclinicx-images.s3.ap-southeast-2.amazonaws.com/craigclinic12/1631783133063-body-chart";
const previewLink = "https://dl.boxcloud.com/api/2.0/internal_files/877350458419/versions/942959773219/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!dnWnfNEzCSFA1vbjBTx_2_AIWrdUngoBmY4PkMr9-NPTrD2__kSroMXSFmtSGeJ7sqcbShcGW_tlZ81Ks0EL16DDF0YCM3D-IfM66e883ZUZnYwjh8R2H9RPkDxZ2givF4kNzHBEd0qfBHCdROFWdyYHXTEUe9EuI27V42Xdtax_hBMamwdqlpcHKEE02I2lRjDXKQl0PdX9T-0RDqpr0hmTafOdHI1HSOUhJ8TjYHzQ7CeKWd5DU6hnd8IO5T__SAYQVnMo0ywfRXVO3pRrKtmRdtjhQavpa4OG9UXTc6HELgNFshnoabn8wZGbg35RCW-H0qHaAx7IwAFK4X1CFxS_TK-Pb2wHa9DR9n2sy8l1SQMvfinBPQCXi3lmV95ts6WqwcRbE3-HJK3KNBwohDjLJ-AGGJFzdqaURKmIuFyuLTw34xd7q5b8LpkWWfwxniOtbWOuslhywgOzY1wc9VVti5kSggZy6D4OsFH3Jt3lfPN6IpGIw95FcqrT3j8P-aRnQ0NavaqBzfEip0085qn48gAUdYXt-YnyobfHl1FamssoKq5rWc8lKP3RWVGCzQR2kIlp4ha-UmLBq9J9LmaTQtZyFB1L3JAGDsq2WWKcRrYe3mJnvrHs7NjEiJ0IkGZ6fluxCrB9z05QWNXlGFm3CJ_Owfuequ8PAH4m977pxRCqRNGz9rWN51eH3m5d8ve2oln7rjBXIDYK1QYJWnMKykNHerlHIr9IEVZu29ztELAjuO3cDc_PAmTJb30Uep2yJgVmQi9joW4j3PbW6ZgEFIgydkB0aZaMVtfVF1U_CD6dzJ_G6uMhHAQxPT1Zeq4pM9cSLmpk1XB4Anfbz5mtO8NB6ZmFevJ3Pvg7&box_client_name=box-content-preview&box_client_version=2.80.0";
document.getElementById("cfImg").style.backgroundImage = `url('${previewLink}')`;



toDataURL(previewLink, (response)=>{
    console.log("qq response", response);
})