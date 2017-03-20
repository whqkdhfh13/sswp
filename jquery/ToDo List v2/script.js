// TITLE

// Declare Global Variables
var taskListArray = [];

$(document).ready(function() {
    // Execute code once document is loaded.

    // Add Event Listeners
    $("#addTask").click(addTask);  // Add Task Button
    $("#saveList").click(saveList); // Save List Button
    $("#loadList").click(loadList); // Load List Button
});



// Event functions
function addTask() {
    // Get task description
    var task = $("#taskInput").val();
    // Add task to task list
    $("#taskList").append("<li>" + task + "</li>");
    taskListArray.push(task);
    $("#taskInput").val("");
    $("ul li:last-child").click(removeTask);
}

function removeTask() {
    // Remove the clicked task from the array
    var currentTask = $(this).text();
    var index = taskListArray.indexOf(currentTask);
    taskListArray.splice(index, 1);

    // Remove task from the html list
    this.remove();
}

function saveList() {
    // Save contents of taskListArray to localStorage
    localStorage.taskList = taskListArray.join(";");
}

function loadList() {
    // Load and display task list from localStorage
    taskListArray = localStorage.taskList.split(";");
    for (var i = 0; i < taskListArray.length; i++) {
        $("#taskList").append("<li>" + taskListArray[i] + "</li>");
        $("ul li:last-child").click(removeTask);
    }
}
