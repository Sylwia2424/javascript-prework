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
