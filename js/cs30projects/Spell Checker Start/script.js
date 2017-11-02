// Load dictionary from file
var dictionary = [];
$.get("data/dictionary.txt", function (data) {
    data = data.trim();
    dictionary = data.split("\r\n");
    console.log(dictionary);
});

// Document Ready Code
$(document).ready(function () {
    // Add a click event listener to my checkWord button
    $("#checkWord").click(checkWord);

});

// Helper Functions
function checkWord() {
    // Get the word the user typed into the input element
    var word = $("#word").val();

    // Check and report if the word is in the dictionary
    $("#result").html(word + " is in the dictionary.");
}
