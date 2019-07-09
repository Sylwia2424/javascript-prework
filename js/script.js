function playGame, clearMessages(argPlayerInput){
	if(argPlayerInput == 1, 2, 3)

printMessage('Mój ruch to: ' + playerInput);

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

function getMoveName(argComputerMove){
  if(argComputerMove == 1){
    return 'kamień';
  }else if(argComputerMove == 2){
    return 'papier';
  }else if(argComputerMove == 3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

 /*if(randomNumber == '1'){
  computerMove = "kamień";
  }
 else if(randomNumber == '2'){
  computerMove = "papier";
  }
 else if(randomNumber == '3'){
  computerMove = "nożyce";
  }
*/
printMessage('Mój ruch to: ' + computerMove);
console.log('Wybrałem' + playerInput);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);


console.log('moves:', argComputerMove, argPlayerMove);
function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'papier' || argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
  }
  else {
    printMessage('Tym razem przegrywasz :(');
  }
}
}
function buttonClicked(){
  printMessage('kamień');
}
let testButton = document.getElementById('play-rock');

play-rock.addEventListener('click', playGame);
function buttonClicked(){
  printMessage('papier');
}
let testButton = document.getElementById('play-paper');
play-paper.addEventListener('click', playGame);
function buttonClicked(){
  printMessage('nożyce');
}
let testButton = document.getElementById('play-scissors');
play-scissors.addEventListener('click', playGame);

/*
if(playerMove == '1'){
  playerMove = "kamień";
}
else if(playerMove == '2'){
	playerMove = "papier";
}
else if(playerMove == '3'){
	playerMove = "nożyce";
}
else{playerMove = "Ruch gracza nieznany"
}

printMessage('Ruch gracza: ' + playerMove);
console.log('Gracz wpisał: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier' || computerMove == 'papier' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}
else if( computerMove == 'kamień' && playerMove == 'kamień' || computerMove == 'papier' && playerMove == 'papier' || computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis');
}
else if( computerMove == 'kamień' && playerMove == 'nożyce' || computerMove == 'papier' && playerMove == 'kamień' || computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Przegrałes');
}
*/