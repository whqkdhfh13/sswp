// Load dictionary from file
var dictionary;
var inpText;
var resText = [];
$.get("data/dictionary.txt", function (data) {
    data = data.trim();
    dictionary = data.split("\r\n");
});

$.get("data/AliceInWonderLandCh1.txt", function (data) {
    data = data.trim();
    inpText = data.split("\r\n");
    for (var i = 0; i < inpText.length; i++) {
        inpText[i] = inpText[i].split(" ");
        for (var j = 0; j < inpText[i].length; j++) {
            var tempA = inpText[i][j].split("");
            for (var k = 0; k < tempA.length; k++) {
                if (tempA[k] === "." || tempA[k] === "\"" || tempA[k] === "," || tempA[k] === "?" || tempA[k] === "\'" ||
                    tempA[k] === "!" || tempA[k] === "(" || tempA[k] === ")" || tempA[k] === "-" || tempA[k] === "*" || tempA[k] === ":") {
                    console.log(tempA[k]);
                    tempA.splice(k, 1);
                }
            }
            resText.push(tempA.join(""));
            if (inpText[i][j] === "") {
                inpText[i].splice(j, 1);
                j--;
            }
        }
        if (inpText[i].length === 0) {
            inpText.splice(i, 1);
            i--;
        }
    }
});

// Document Ready Code
$(document).ready(function () {
    // Add a click event listener to my checkWord button
    $("#checkWord").click(checkWord);
    $("#checkDocu").click(checkDocu);

});

// Helper Functions
function checkWord() {
    // Get the word the user typed into the input element
    var word = $("#word").val().toLowerCase();
    var temp = 0;

    for (var i = 0; i < dictionary.length - 1; i++) {
        if (dictionary[i] === word) {
            temp++;
            console.log("worked");
        }
    }
    console.log(temp);
    // Check and report if the word is in the dictionary

    if (temp > 0) {
        $("#result").html(word + " is in the dictionary.");
    } else {
        $("#result").html(word + " is not in the dictionary.");
    }
}

function checkDocu() {
    // Get the word the user typed into the input element
    var word = $("#word").val().toLowerCase();
    var temp = 0;
    var searchType = $("input[name='searchType']:checked").val();

    if (searchType == "linear") {

    } else {

    }


    if (temp > 0) {
        $("#result").html(word + " is in the dictionary.");
    } else {
        $("#result").html(word + " is not in the dictionary.");
    }
}

function linearSearch(arr, inp) {
    this.inp = inp;
    this.arr = arr.slice();
    console.log("Start the Search.");
    for (var i = 0; i < this.arr.length - 1; i++) {
        if (this.inp == this.arr[i]) {
            return i;
        }
    }
    return -1;
}

function binarySearch(arr, inp, start) {
  this.inp = inp;
  this.arr = arr.slice();
  this.upp = this.arr.length - 1;
  if (!(start == undefined) || !(start == 0)) {
    this.low = start;
  } else {
    this.low = 0;
  }

  while (!(this.low > this.upp)) {
    this.mid = floor((this.low + this.upp) / 2);
    if (this.inp === this.mid) {
      return this.mid;
    } else if (this.inp < this.mid){
      this.upp = this.mid - 1;
    } else {
      this.low = this.mid + 1;
    }
  }

  return -1;
}
