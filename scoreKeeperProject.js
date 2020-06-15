var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var p1Score = 0;
var p2Score = 0;
var gameOver=false;
var scoreLimit = document.querySelector("input");
var scoreLimitOutput = document.querySelector("p span");
var winningScore = 5;

alert("hello");

p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
  }
  p1Display.textContent = p1Score;
  if(p1Score===winningScore){
    gameOver = true;
    p1Display.classList.add("winner");
  }
});

p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
  }
  p2Display.textContent = p2Score;
  if(p2Score===winningScore){
    gameOver = true;
    p2Display.classList.add("winner");
  }
});

resetButton.addEventListener("click", reset);

function reset(){
  p1Score=0;
  p2Score=0;
  p1Display.textContent = "0";
  p2Display.textContent = "0";
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

scoreLimit.addEventListener("change", function(){
  if(scoreLimit.value>winningScore){
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver=false;
  }
  else if(scoreLimit.value<winningScore){
    reset();
  }
  scoreLimitOutput.textContent = this.value;
  winningScore=Number(this.value);
});
