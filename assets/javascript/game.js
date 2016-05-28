$(document).ready(function(){

var randomNumber;
var wins = 0;
var losses = 0;
var userScore = 0;
var inputArray =[];
var num;
var points;

var cats = ["bub", "grumpy", "venus", "henri"]

//Choose random number to be matched
function getRandomArbitrary(min, max) {
     num = Math.floor(Math.random() * (max - min)) + min;
    console.log(num);
}
//Display random number


getRandomArbitrary(19,120);
$('#randomNumber').html(num);



//assign point values to cats
for (i = 0; i < cats.length; i++) {
  points= getRandomArbitrary (1,12);
  var b = $("<button>");
   // 	b.addClass("cat-button");
	//b.attr("id", cats[i]);
  //b.text(cats[i]);
 	b.value = (b);
	console.log(b);
  
};


//add up points as user clicks
  $(".cat-button").on("click", function(){
      console.log('number', this);
      var number = ($(this).attr('value'));
      console.log(number);
      inputArray.push(number);
      function getSum(total, num) {
        return total + Math.round(num);
       }
      function myFunction(item) {
       

      $('#score').html(inputArray.reduce(getSum,0));
    }
    });


//compare score to starting number

//update wins and losses

//restart game
});
