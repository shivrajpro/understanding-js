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
const previewLink = "https://dl.boxcloud.com/api/2.0/internal_files/877015319774/versions/942570894974/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!xlGswTQtPorvniTi_gBJH-UMK6Jyi4Jjn49d1g6btpeqmHVnYM9M50iGT0wNZxwezj_k_LNPdleLUDKNREahCXNRI7nIIzLuZlDNBq8sDEFprVjo1gYW3ny69wdx7w1Bbj-fgZxAiI50x5csNglm8qE7KAHI9KNQ83PXrgtypUb8xApPsn0-TMHcFoGSOJXWKjYGCGTbN070grNbSH4_HJzKXgGX-duZu1Z4y3aFco_taLbMxgsJSClCPpWWZ_ulv1yqx4sdJpDPAv9aJG5BkuWIMBP_FPLXjt5_gS-MGAhN-Lb2jx8Av71Tu2yIfKNvhfXi_7-Dsb0qfkA1VfI9ncjwUibsgsJYMQQ_VeKwTzXoIyxOm2Bz1eVuFHeVxzqaSMGbKt4JkjoeeUhHrLdMJJaJZqsDOBJ5fnaAdy_hQAgesA0QjupGBPZBEqTwlbS5rBLTSv3Z4SWzWs-6R3h3OV33ZL9MRuO-ntC-oZNfO-ER7M5a4Y54a-aLuAtZ_0kmxIMMNFSdiyXtMzwNM4kaeRUr6za7g_qp4C574fwA2w44pHqrmYFGEUFb15wiy6IhJwceIsvvJCPdoy4L-baMar6L3KIH-feUPAfvKA1jb4dIaO6Oc3jE8h64DxynuNO2bHNWKiBpq6XSbS41x8kE9AplkUL8PDEpepy5K37DQETc8wsLSF2UV4FbVfiNvzoCv8bG5SKSKXO01XwJPhkA5pfX6J5k8AkMO4UMTpeIvXtj2P2whVrC4JgccD1hUvU_Q1SQ7CRMqlrhbvF094X7XV39t2hhoJdJnkFPbc29mIlE2A9mmHFQqt_bcgy7wdIotPG_SI2o8c-IeZXSvS0mt0jqmconwKsFm_i3b6pw&box_client_name=box-content-preview&box_client_version=2.80.0";
document.getElementById("cfImg").style.backgroundImage = `url('${previewLink}')`;



toDataURL(previewLink, (response)=>{
    console.log("qq response", response);
})