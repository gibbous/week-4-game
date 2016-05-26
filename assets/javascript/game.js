//$(document).ready(function(){

var randomNumber
var wins = 0;
var losses = 0;
var userScore = 0;


var cats = ["bub", "grumpy", "venus", "henri"]

//Choose random number to be matched
function getRandomArbitrary(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    console.log(num);
}
//Display random number


var randomNumber = getRandomArbitrary(19,120);
console.log(randomNumber);



//create buttons and assign point values to cats
for (i = 0; i < cats.length; i++) {
		var b = $("<button>");
    	b.addClass("cat-button");
    	b.attr("data-num", cats[i]);
    	b.text(cats[i]);
    	b.val(getRandomArbitrary (1,12));
    	console.log(b);
			$("#buttons").append(b);

}


//add up points as user clicks
  $('.cat-button').on('click', function() {
	   
			$('#score').append(0);
		});
//compare score to starting number

//update wins and losses

//restart game
