// display a random number on the page

var jackpotValue = Math.floor((Math.random() * 120) + 19);
$(".jackpot").text(jackpotValue);

