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




var start = document.querySelector (".start");
var timer = document.querySelector ("");
var question = document.querySelector (".question");
var score = document.querySelector (".score");
var answers = document.querySelector ("#answers");
var initials =
var end


var clickStart
var timerCnt
var ask
var answer
var tf
var over
var scoreCal
var initials
