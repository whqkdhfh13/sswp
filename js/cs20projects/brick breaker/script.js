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
            alert("ID that you typed is already exist. \nPlease try again.");
        } else if (tempUsername == "" || tempUsername == undefined) {

        } else {
            var tempNickname = prompt("Type nickname that you want to use.");
            if (authorizations(tempNickname, "nickname")) {
                alert("Nickname that you typed is already exist.\nPlease try again.");
            } else if (tempNickname == "" || tempNickname == undefined) {

            } else {
                var tempPassword = prompt("Type password that you want to use.");
                if (tempPassword !== "") {
                    alert("Your signup was successfully done!");

                    // Push datas to localStorage.
                    id.push(tempUsername);
                    localStorage.id = id.join(";");
                    nickname.push(tempNickname);
                    localStorage.nickname = nickname.join(";");
                    password.push(tempPassword);
                    localStorage.password = password.join(";");
                }
            }

        }
    });

});

function authorizations(input, type) {
    var tempStr = localStorage.getItem(type);
    var authArray = tempStr.split(";");
    for (var i = 0; i < authArray.length; i++) {
        if (authArray[i] == input) {
            return true;
        }
    }
    return false;
}

function spaceCheck(input) {
    var tempArray = input.split("");
    var checksum = 0;
    for (var i = 0; i < tempArray.length; i++) {
        if (tempArray[i] == " ") {checksum++;}
    }
    if (checksum == tempArray.length) {
        return true;
    } else {
        return false;
    }
}

function loadData() {
    if (localStorage.id == undefined || localStorage.id == "") {
        localStorage.id = " ";
        localStorage.nickname = " ";
        localStorage.password = " ";
    }
    id = localStorage.id.split(";");
    password = localStorage.password.split(";");
    nickname = localStorage.nickname.split(";");
}
