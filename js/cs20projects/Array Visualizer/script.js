$(document).ready(function() {
    // Add Event Listeners

    // Array 1 Button
    $("#a1").click(function() {
        $("#a1").toggleClass("a1");
        a1on = !a1on;
    })

    // Array 2 Button
    $("#a2").click(function() {
        $("#a2").toggleClass("a2");
        a2on = !a2on;
    })

    // Array 3 Button
    $("#a3").click(function() {
        $("#a3").toggleClass("a3");
        a3on = !a3on;
    })


});
