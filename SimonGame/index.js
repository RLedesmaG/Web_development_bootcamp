const buttonColors = ['blue', 'green', 'red', 'yellow'];

var alive = false;
var level = 0;
var gamePattern = [];
var userPattern = [];

document.addEventListener('keydown', function(event) {
  if(!alive){
    alive = true;
    document.querySelector('h1').innerHTML = 'Level ' + level.toString();
    nextSequence();
  }
});

const buttons = document.querySelectorAll('.btn');
for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function () {
    var currentColor = this.id;
    pressButton(currentColor);
    userPattern.push(currentColor);

    checkAnswer(userPattern.length - 1);
  });
}

function checkAnswer(pos) {
  if (userPattern[pos] === gamePattern[pos]){
    if(userPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else{
    buttonSound('wrong');
    document.body.classList.add('game-over');
    document.querySelector('h1').innerHTML = "Game Over, Press Any Key to Restart";
    setTimeout(function () {
      document.body.classList.remove('game-over');
    }, 200);
    gameOver();
  }
}

function nextSequence() {
  userPattern = [];
  level++;
  document.querySelector('h1').innerHTML = 'Level ' + level.toString();
  const move = genMove();
  gamePattern.push(move);
  pressButton(move);
}

function pressButton(buttonId) {
  buttonAnimation(buttonId);
  buttonSound(buttonId);
}

function buttonAnimation(id){
  var activeButton = document.getElementById(id);
  activeButton.classList.add('pressed');
  setTimeout(function() {
    activeButton.classList.remove('pressed');
  } , 200);
}

function buttonSound(id){
  var audio = new Audio('sounds/' + id + '.mp3');
  audio.play();
}

function genMove(){
  const random = Math.floor(Math.random() * 4);
  return buttonColors[random];
}

function gameOver() {
  alive = false;
  level = 0;
  gamePattern = [];
  userPattern = [];
}
