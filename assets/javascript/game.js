$(document).ready(function(){
//VARIABLES

var randomNumber;
var wins = 0;
var losses = 0;
var userScore = 0;
var inputArray =[];
var num;
var points;

var cats = ["bub", "grumpy", "venus", "henri"]

//FUNCTIONS
function catCollector() {


console.log(inputArray);
//Choose random number to be matched
function getRandomArbitrary(min, max) {
     num = Math.floor(Math.random() * (max - min)) + min;
    console.log(num);
}
//Display random number
getRandomArbitrary(19,120);
$('#randomNumber').html(num);

  //set userScore to zero
  userScore = 0;
  inputArray = [];
  $('#score').html(userScore);

//assign random point values to cats -- not currently working
/*
for (i = 0; i < cats.length; i++) {
  getRandomArbitrary (1,12);
  console.log("here are " + num); 
 $('.cat-button').data(num) ;
  var b = $("<button>");
   b.addClass("cat-button");
	b.attr("id", cats[i]);
  b.text(cats[i]);
 	b.value = (b);
	console.log(b);
  
};*/

//Function to get sum of user input
function getSum(total, num) {
    return total + Math.round(num);
}

//add up points as user clicks
  $('.cat-button').on('click', function() {
      var number = ($(this).attr('value'));
      inputArray.push(number);
      userScore = inputArray.reduce(getSum,0);
      $('#score').html(userScore);
      console.log(inputArray);
    
    //compare score to starting number   
      if (userScore == num) {
        wins++;
        $('#wins').html(wins);
        alert("winner!");
         return catCollector();

        }

       else if (userScore > num) {
        losses++;
        $('#losses').html(losses);
       alert("game over!");
       return catCollector();
        }

    });
    };
    catCollector();
});

