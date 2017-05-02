var id = [];
var password = [];
var nickname = [];
$(document).ready(function() {

    $("canvas").hide();

    $("#singin").click(function() {
        $(".login").hide();
        $("canvas").show();
    });

    $("#singup").click(function() {
        loadData();
        var tempUsername = prompt("Type id that you want to use.");
        if (authorizations(tempUsername, "id")) {
            alert("ID that you typed are already exist. \n Please try again.");
        } else if (tempUsername == "") {

        } else {
            var tempNickname = prompt("Type nickname that you want to use.");
            if (authorizations(tempNickname, "nickname")) {
                alert("Nickname that you typed are already exist.\n Please try again.");
            } else {
                var tempPassword = prompt("Type password that you want to use.");

                // Push datas to localStorage.
                id.push(tempUsername);
                localStorage.id = id.join(";");
                nickname.push(tempNickname);
                localStorage.nickname = nickname.join(";");
                password.push(tempPassword);
                localStorage.password = password.join(";");
            }

        }
    });

});

function authorizations(input, type) {
    var authType = input, tempStr = localStorage.getItem(type), authArray;
    authArray = tempStr.split(";");

    for (var i = 0; i < authArray.length; i++) {
        if (authArray[i] == authType) {
            return true;
        } else {
            return false;
        }
    }

}

function loadData() {
    id = localStorage.id.split(";");
    password = localStorage.password.split(";");
    nickname = localStorage.nickname.split(";");
}
