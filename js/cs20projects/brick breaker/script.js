var id = [];
var password = [];
var nickname = [];
var authArray = [];
$(document).ready(function() {

    $("canvas").hide();

    $("#singin").click(function() {
        $(".login").hide();
        $("canvas").show();
    });

    $("#singup").click(function() {
        id = localStorage.id.split(";");
        password = localStorage.password.split(";");
        nickname = localStorage.nickname.split(";");

    });

});

function authorizations(input, type) {
    var authType;
    if (type == id) {
        authType = $("#inputId").val();
    } else {
        authType = $("#inputPw").val();
    }

    var tempStr;
    tempStr = localStorage.getItem(input);
    authArray = tempStr.split(";");

    for (var i = 0; i < authArray.length; i++) {

    }

}
