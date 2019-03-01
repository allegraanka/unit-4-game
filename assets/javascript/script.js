// display a random number on the page
var jackpotValue = Math.floor((Math.random() * 120) + 19);
$(".jackpot").text(jackpotValue);

// each crystal should generate a random number on click, and add that number to the user score

// if the user score is equal to the jackpot, user wins, and game resets
// if user wins, show a message that the user won
// reset game

// if the user score is greater than the jackpot, user loses, and game resets
// if user loses, show a message that the user lost
// reset game

// on load or reset, game object should generate new random numbers for each crystal and reset the user score

    // on click of crystal, get value and update user score
    function updateScore() {
        $(".crystal").on("click", function () {
            var c1value = Math.floor((Math.random() * 12) + 5);
            console.log(c1value);
        })
    }

    updateScore();