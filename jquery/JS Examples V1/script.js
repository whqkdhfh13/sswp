var username;
var right = 0;
$(document).ready(function() {

    $("#helloUser").click(function() {
        // Hello User
        username = prompt("What is your name?");
        console.log(username);
        if (username != "" || username == " ") {
            alert("Hello " + username + "!");
            document.getElementById("name").innerHTML = "Good luck on your quiz, " + username + "!";
        } else {
            alert("You didn't type anything!")
        }
    });

    $("#q1").click(function() {
        right = 0;
        var qst1 = confirm("Is sin of 30 equals 1/2?");
        var qst2 = confirm("Is sin of 90 equals sqroot(3)/2?");
        var qst3 = confirm("Is 1 year has 365 days?");
        if (qst1 == true) {right++;}
        if (qst2 == false) {right++;}
        if (qst3 == true) {right++;}
        document.getElementById("score").innerHTML = "Your score is " + right + "/3 ! Nice job!";
    });



    // // Simple Calculator
    // var num1 = Number(prompt("Enter a number: "));
    // var num2 = Number(prompt("Enter another number: "));
    // var sum = num1 + num2;
    // alert("The sum of your number is " + sum);
    //
    // // Coin Flip Simulator
    // var numFlips = Number(prompt("Enter number of coin flips: "));
    // var numHeads = 0;
    // var numTails = 0;
    // var randNum;
    // for (var flip = 0; flip < numFlips; flip++) {
    //     randNum = Math.random(); // Random decimal b/t 0 and 1
    //     if (randNum < 0.5) {
    //         numHeads++;
    //     } else {
    //         numTails++;
    //     }
    // }
    // alert("Heads: " + numHeads + " Tails: " + numTails);


});
