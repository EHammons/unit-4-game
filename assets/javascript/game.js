var randomNumber = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;
var buttonOne = 0;
var buttonTwo = 0;
var buttonThree = 0;
var buttonFour = 0;

$("#winsCount").text(wins);
$("#lossesCount").text(losses);
$("#scoreTotal").text(totalScore);

var newGame = function() {    
    totalScore = 0;
    $("#scoreTotal").text(totalScore);
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#targetNumber").text(randomNumber);
    buttonOne = Math.floor(Math.random() * 12) + 1;
    console.log("Purple gem: " + buttonOne);
    buttonTwo = Math.floor(Math.random() * 12) + 1;
    console.log("Blue gem: " + buttonTwo);
    buttonThree = Math.floor(Math.random() * 12) + 1;
    console.log("Orange gem: " + buttonThree);
    buttonFour = Math.floor(Math.random() * 12) + 1;
    console.log("Pink gem: " + buttonFour);
}

$(document).ready(function() {
    newGame();
})

$(".btn1").on("click", function() {
    totalScore += buttonOne;
    $("#scoreTotal").text(totalScore);
    if (totalScore === randomNumber) {
        wins++;
        $("#winsCount").text(wins);
        newGame();
    } else if (totalScore >= randomNumber) {
        losses++;
        $("#lossesCount").text(losses);
        newGame();
    }
})
$(".btn2").on("click", function() {
    totalScore += buttonTwo;
    $("#scoreTotal").text(totalScore);
    if (totalScore === randomNumber) {
        wins++;
        $("#winsCount").text(wins);
        newGame();
    } else if (totalScore >= randomNumber) {
        losses++;
        $("#lossesCount").text(losses);
        newGame();
    }
})
$(".btn3").on("click", function() {
    totalScore += buttonThree;
    $("#scoreTotal").text(totalScore);
    if (totalScore === randomNumber) {
        wins++;
        $("#winsCount").text(wins);
        newGame();
    } else if (totalScore >= randomNumber) {
        losses++;
        $("#lossesCount").text(losses);
        newGame();
    }
})
$(".btn4").on("click", function() {
    totalScore += buttonFour;
    $("#scoreTotal").text(totalScore);
    if (totalScore === randomNumber) {
        wins++;
        $("#winsCount").text(wins);
        newGame();
    } else if (totalScore >= randomNumber) {
        losses++;
        $("#lossesCount").text(losses);
        newGame();
    }
})
