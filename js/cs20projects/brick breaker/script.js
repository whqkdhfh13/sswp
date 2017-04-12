var username;
$(document).ready(function() {

    $("#game").hide();

    $("#a").click(function() {
        // Hello User
        username = prompt("What is your name?");
        console.log(username);
        if (username !== "" || username == " ") {
            alert("Hello " + username + "!");
            document.getElementById("name").innerHTML = "Good luck on your quiz, " + username + "!";
        } else {
            alert("You didn't type anything!");
        }
    });
});
