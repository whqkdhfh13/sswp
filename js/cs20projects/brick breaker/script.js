var id = [];
var password = [];
var nickname = [];
var bestScore = [];
var login = false;
$(document).ready(function() {

    window.onbeforeunload = function() {
      if (bestScore[authorizations($("#inputId").val(), "id")[1]] < score) {
  			bestScore[authorizations($("#inputId").val(), "id")[1]] = score - 1;
  			localStorage.bestScore = bestScore.join(";");
  		}
        return "You will lose all your data!";
    }

    function disableF5(e) {
        if (e.which == 116 || e.keyCode == 116 || e.which == 82 || e.keyCode == 82) {
            e.preventDefault();
            alert("You can't refresh the page! \nYou may keep play my game!");
        }
    }
    $(document).on("keydown", disableF5);


    if (localStorage.id !== undefined && localStorage.nickname !== undefined && localStorage.password !== undefined) {
        id = localStorage.id.split(";");
        nickname = localStorage.nickname.split(";");
        password = localStorage.password.split(";");
        bestScore = localStorage.bestScore.split(";");
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
        var tempUsername = prompt("Type id that you want to use.\nIt should be longer than 3 characters.");
        if (authorizations(tempUsername, "id")[0]) {
            alert("ID is already exist. \nPlease try again.");
        } else if (tempUsername === "" || tempUsername === null) {
            alert("Your signup has been cancled.");
        } else if (spaceCheck(tempUsername)) {
            alert("You can't have only spaces in your form.\nPlease try again.");
        } else if (tempUsername.length < 3) {
            alert("Your ID is too short. \nPlease try again.");
        } else {
            var tempNickname = prompt("Type nickname that you want to use.\nIt shouldn't be longer than 12 characters.");
            if (authorizations(tempNickname, "nickname")[0]) {
                alert("Nickname is already exist.\nPlease try again.");
            } else if (tempNickname === "" || tempNickname === null) {
                alert("Your signup has been cancled.");
            } else if (spaceCheck(tempNickname)) {
                alert("You can't have only spaces in your form. \nPlease try again.");
            } else if (tempNickname.length > 12) {
                alert("Your nickname is too long. \nPlease try again.");
            } else {
                var tempPassword = prompt("Type password that you want to use.\nIt should be longer than 3 characters.");
                if (tempPassword === "" || tempPassword === null) {
                    alert("Your signup has been cancled.");
                } else if (spaceCheck(tempPassword)) {
                    alert("You can't have only spaces in your form. \nPlease try again.");
                } else if (tempPassword == tempUsername) {
                    alert("ID and Password shouldn't be equal. \nPlease try again.");
                } else if (tempPassword.length < 3) {
                    alert("Your Password is too short. \nPlease try again.");
                } else {
                    // Push datas to localStorage.
                    id.push(tempUsername);
                    nickname.push(tempNickname);
                    password.push(tempPassword);
                    bestScore.push("0");
                    localStorage.id = id.join(";");
                    localStorage.nickname = nickname.join(";");
                    localStorage.password = password.join(";");
                    localStorage.bestScore = bestScore.join(";");

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
