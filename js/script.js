let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

 if(randomNumber == '1'){
  computerMove = "kamień";
  }
 else if(randomNumber == '2'){
  computerMove = "papier";
  }
 else if(randomNumber == '3'){
  computerMove = "nożyce";
  }

printMessage('Mój ruch to: ' + computerMove);

let playerMove = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

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
/*
let playerMove = getPlayerMove(randomNumber);
console.log('moves:', argComputerMove, argPlayerMove);
function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier' || computerMove == 'papier' && playerMove == 'nożyce || computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
}*/

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
	playerMove ='papier';
}
else if(playerInput == '3'){
	playerMove ='nożyce';
}
printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz');
}
else if(computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Przegrałeś');
}
else if(computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('Remis');
}
else if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){
	printMessage('Spróbuj jeszcze raz wybrać liczbę 1, 2 lub 3');
}

if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz');
}
else if(computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Przegrałeś');
}
else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('Remis');
}
else if(computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
	printMessage('Spróbuj jeszcze raz wybrać liczbę 1, 2 lub 3');
}
if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz');
}
else if(computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Przegrałeś');
}
else if(computerMove == 'papier' && playerMove == 'papier'){
	printMessage('Remis');
}
else if(computerMove == 'papier' && playerMove == 'nieznany ruch'){
	printMessage('Spróbuj jeszcze raz wybrać liczbę 1, 2 lub 3');
}
else if(computerMove == 'nieznany ruch' && playerMove == 'papier'){
	printMessage('Cos poszło nie tak, spróbuj jeszcze raz');
}*/