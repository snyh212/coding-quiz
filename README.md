# coding-quiz

[Deployable Link: https://snyh212.github.io/coding-quiz](https://snyh212.github.io/coding-quiz/)

## Description

Coding-quiz is a small quiz to test your knowledge in coding. The user is prompted with a page that has a timer and a start button. Upon clicking the button a question with 3 answer choices appears and a timer begins to count down from 60, one second at a time. The consequence to choosing incorrectly is a deduction of 5 seconds from the remaining time. The amount of seconds left is saved as the players score.


## Technologies used

Project done using HTML, CSS, JavaScript, DOM, Github, GitLab, on VS code and GitBash.


## Code and its function
This code adds 'click' to the button, and calls the functions to begin-
```
start.addEventListener("click", function(event) {
   event.preventDefault();
   timerCnt();
   ask();
   answer();
   start.setAttribute("hidden",true);
});
```
The JavaScript code here is used to start the timer-
```
function timerCnt() {
   myInterval = setInterval(function() {
      if(timeLeft > 0) {
         timer.innerHTML = timeLeft;
         timeLeft--;
      }
   }, 1000);
}
```
Some html, and the webpage-

<img src="assets\images\Screenshot 2022-06-29 011454.png">
<img src="assets\images\Screenshot 2022-06-29 011214.png">


## Contact

[E-mail: Snyh121@gmail.com](mailto:snyh121@gmail.com")  
[GitHub: snyh212](https://r.search.yahoo.com/_ylt=AwrJ6yegl7JipfcAzB5XNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1655900193/RO=10/RU=https%3a%2f%2fgithub.com%2fsnyh212/RK=2/RS=jAFa0VbZnIusPrwj.ZmIx9gZ3AA-)  
[LinkdIn: Shmuel-Hoffman](https://www.linkedin.com/in/shmuel-hoffman-254b0223b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS2rg0PtBTLeG2szT2ZbGmg%3D%3D)