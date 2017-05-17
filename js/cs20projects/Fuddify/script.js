// Fuddify Text

$(document).ready(function() {
    // Add a button click listener to Fuddify button
    $("button").click(fuddify);
});

function fuddify() {
    // Fuddify the content of the text area by converting all r's and l's to w's.
    // Output results in the #results paragraph.

    // Get content of text area and convert to an array of characters.
    var text = $("textarea").val();
    var characters = text.split("");

    // Traverse array of characters and convert all r's and l's to w's.
    for (var i = 0; i < characters.length; i++) {
        if (characters[i] == "r" || characters[i] == "l") {
            characters[i] = "w";
        } else if (characters[i] == "R" || characters[i] == "L") {
            characters[i] = "W";
        }
    }

    // Convert character array back to a string and output to #results paragraph
    var fuddifiedText = characters.join("");
    $("#results").html(fuddifiedText);
}
