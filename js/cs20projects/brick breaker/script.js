var id = [];
var password = [];
var nickname = [];
var authArray = [];
$(document).ready(function() {

    // Load id, password and nickname.
    id = localStorage.id.split(";");
    password = localStorage.password.split(";");
    nickname = localStorage.nickname.split(";");

    $("canvas").hide();

    $("#singin").click(function() {
        $(".login").hide();
        $("canvas").show();
    });

    $("#singup").click(function() {

    });

});

function authorizations(input, type) {
    var authType, tempStr;

    if (type == id) {
        authType = $("#inputId").val();
        tempStr = localStorage.getItem(id);
    } else {
        authType = $("#inputPw").val();
        tempStr = localStorage.getItem(password);
    }
    authArray = tempStr.split(";");

    for (var i = 0; i < authArray.length; i++) {
        if (authArray[i] == authType) {
            return false;
        } else {
            return true;
        }
    }

}
