function getRandom(){
  const random = Math.floor(Math.random() * 6) + 1;
  return random;
}

const player1 = getRandom();
const player2 = getRandom();

document.getElementById("im1").src = 'images/dice' + player1.toString() + '.png';
document.getElementById("im2").src = 'images/dice' + player2.toString() + '.png';

function getTitle(){
  if(player1 === player2){
    return 'Draw!'
  }
  else if(player1 < player2){
    return 'Player 2 Wins! 🚩'
  }
  else{
    return '🚩 Player 1 Wins!'
  }
}

document.querySelector('h1').innerHTML = getTitle();
