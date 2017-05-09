var id = [];
var password = [];
var nickname = [];
var login = false;
$(document).ready(function() {

    if (localStorage.id !== undefined && localStorage.nickname !== undefined && localStorage.password !== undefined) {
              id = localStorage.id.split(";");
        nickname = localStorage.nickname.split(";");
        password = localStorage.password.split(";");
    }

    $("canvas").hide();

    $("#singin").click(function() {
        if (!authorizations($("#inputId").val(), "id")[0]) {
            alert("ID is not exist.\nPlease Sign up first.");
        } else {
            if (authorizations($("#inputId").val(), "id")[1] !== authorizations($("#inputPw").val(), "password")[1]) {
                alert("Wrong password.\nPlease try again.");
            } else {
                alert("Welcome to my game, '" + nickname[authorizations($("#inputId").val(), "id")[1]] + "' !");
                $(".login").hide();
                $("canvas").show();
                login = true;
            }
        }
    });

    $("#singup").click(function() {
        var tempUsername = prompt("Type id that you want to use.");
        if (authorizations(tempUsername, "id")[0]) {
            alert("ID is already exist. \nPlease try again.");
        } else if (tempUsername === "" || tempUsername === null) {
            alert("Your signup has been cancled. \nPlease try again.");
        } else if (spaceCheck(tempUsername)) {
            alert("You can't have only spaces in your form.\nPlease try again.");
        } else {
            var tempNickname = prompt("Type nickname that you want to use.");
            if (authorizations(tempNickname, "nickname")[0]) {
                alert("Nickname is already exist.\nPlease try again.");
            } else if (tempNickname === "" || tempNickname === null) {
                alert("Your signup has been cancled.\n Please try again.");
            } else if (spaceCheck(tempNickname)) {
                alert("You can't have only spaces in your form. \nPlease try again.");
            } else {
                var tempPassword = prompt("Type password that you want to use.");
                if (tempPassword === null) {
                    alert("Your signup has been cancled. \nPlease try again.");
                } else if (spaceCheck(tempPassword)) {
                    alert("You can't have only spaces in your form. \nPlease try again.");
                } else if (tempPassword == tempUsername) {
                    alert("ID and Password shouldn't be equal. \nPlease try again.");
                } else {
                    // Push datas to localStorage.
                    id.push(tempUsername);
                    nickname.push(tempNickname);
                    password.push(tempPassword);
                    localStorage.id = id.join(";");
                    localStorage.nickname = nickname.join(";");
                    localStorage.password = password.join(";");

                    alert("Your signup was successfully done!");
                }
            }
        }
    });
});

function authorizations(input, type) {
    if (localStorage.getItem(type) === null || input === null) {
        return false;
    }
    var tempStr = localStorage.getItem(type);
    var authArray = tempStr.split(";");

    for (var i = authArray.length; i >= 0; i--) {
        if (authArray[i] == input) {
            return [true, i];
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
