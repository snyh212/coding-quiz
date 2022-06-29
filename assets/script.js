/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score */


//variables: Start button, timer, question, answers,
//game end, initials, score

//functions: click start, timer countdown, question-
//ask, answers t/f, next question, when over,
//save score and initials



/*
1- start function to start timer(onclick), & show question & answers
2- when answered, if wrong -time and next question, else next question
3- when timer runs out | all questions answered, game over
4- input for initials and save with score
*/




var start = document.querySelector ("#start");
var timer = document.querySelector ("#timer");
var timeLeft = 60;
var question = document.querySelector ("#question");
var score = document.querySelector (".score");
var answers = document.querySelector ("#answers");
var initials;
var end = false; //set end to false until true (game over)

questions = ["Which is not a coding language?", "To become a web developer you must -", "For optimal coding sleep is needed -"];
answers1 = ["html","javascript","spanish"];
answers2 = ["Get a masters","Complete a bootcamp","w3schools"];
answers3 = ["Never","Always","During work"];


/* var clickStart;
var timerCnt;
var ask;
var answer;
var over;
var scoreCal;
var initials; */

start.addEventListener("click", function(event) {
   event.preventDefault();
   timerCnt();
   ask();
   start.setAttribute("hidden",true);
/*    newQuestion(); */
   //functions for question & answers
});

function timerCnt() {
   myInterval = setInterval(function() {
      if(timeLeft > -1) {
         timer.innerHTML = timeLeft;
         timeLeft--;
      }/* else {
       over()  
      } */

   }, 1000);
}

function ask(){
   question.innerHTML = questions [0];
}