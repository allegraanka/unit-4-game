// display a random number on the page
var jackpotValue = Math.floor((Math.random() * 120) + 19);
var userScore = 0;
var resetGame = false;
$(".jackpot").text(jackpotValue);


// on click of crystal, get value and update user score
function updateScore() {
    $(".crystal").on("click", function () {
        var c1value = Math.floor((Math.random() * 5) + 1);
        var c2value = Math.floor((Math.random() * 0) + 7);
        var c3value = Math.floor((Math.random() * 2) + 2);
        var c4value = Math.floor((Math.random() * 1) + 3);
        var randomNumber = [c1value, c2value, c3value, c4value];
        for (var i = 0; i < randomNumber.length; i++) {
            userScore += randomNumber[i]
        }
        console.log(userScore);
        if (userScore > jackpotValue) {
            $(".user-score").text("You lose! Because your score: " + userScore + " is greater than " + jackpotValue + ".");
            resetGame = true;
            setTimeout(initializeGame, 2500);
        } else if (jackpotValue > userScore) {
            $(".user-score").text("You've added " + userScore + " points to your total score! Guess again? But don't go over " + jackpotValue + "!");
            resetGame = false;
        } else if (userScore === jackpotValue) {
            $(".user-score").text("I can't believe it! Against stacked odds, you won with a score of: " + userScore + "!");
            resetGame = true;
            setTimeout(initializeGame, 4000);
        }
    })
}

function initializeGame() {
    if (resetGame === true) {
        // setInterval for 3 seconds to say 'starting new game in 3... 2... 1...'
        location.reload();
    }
}

updateScore();